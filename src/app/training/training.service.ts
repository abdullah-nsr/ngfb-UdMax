import { Injectable } from '@angular/core'
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription'

@Injectable()
export class TrainingService {
    constructor(private db: AngularFirestore){};
    exercisesChange = new Subject<Exercise[]>();
    finishedExcerciesChanged = new Subject<Exercise[]>()
    private availableExercise: Exercise [] = [];
    changeExercise = new Subject<Exercise>();
    exercises: Exercise[] = [];
    fbSubsicription: Subscription[] = [];
    // private availableExercise: Exercise[] = [
    //     { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    //     { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    //     { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    //     { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    // ];
    private runningExercise: Exercise; 
    fetchAvailableExercise(){
        this.fbSubsicription.push(this.db.collection('availableExercise')
        .snapshotChanges()
        .map(docArray => {
        return  docArray.map(doc => { 
            const data = doc.payload.doc.data() as Exercise;
            return {
            id : doc.payload.doc.id,
            ...data
            };
        });
        })
        .subscribe((exercises: Exercise[]) => {
            this.availableExercise = exercises;
            this.exercisesChange.next([...this.availableExercise]);
        }));
    }

    startExercise(selectedId) {
        this.db.doc('availableExercise/' + selectedId).update({lastSelected: new Date()})
        this.runningExercise = this.availableExercise.find(ex => ex.id == selectedId) 
        this.changeExercise.next({...this.runningExercise})
    }

    compleatExercise() {
        this.addDataToDatabase(
            {...this.runningExercise,
            date: new Date(),
            state:'Completed'
        });
        this.runningExercise = null;
        this.changeExercise.next(null);
      }
    cancelExercise(process) {
        this.addDataToDatabase({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (process/100),
            calories: this.runningExercise.calories * (process/100),    
            date: new Date(),
            state:'Cancelled'
        });
        this.runningExercise = null;
        this.changeExercise.next(null);
    }
    getCancelOrCompleatExercise() {
        this.fbSubsicription.push(this.db.collection('finishExercies').valueChanges()
        .subscribe((exercises: Exercise[]) => {
            this.finishedExcerciesChanged.next(exercises)
        }));
    }
    getCurrentExercise() {
        return {...this.runningExercise};
    }
    private addDataToDatabase(exercise: Exercise){
        this.db.collection('finishExercies').add(exercise);
    }
    canselSubscription(){
        this.fbSubsicription.forEach(sub => sub.unsubscribe())
    }
}