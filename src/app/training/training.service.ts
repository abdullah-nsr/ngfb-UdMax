import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject'

export class TrainingService {
    changeExercise = new Subject<Exercise>();
    exercises: Exercise[] = []
    private availableExercise: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];
    private runningExercise: Exercise; 
    getAvailableExercise(){
        return this.availableExercise.slice();
    }

    startExercise(selectedId) {
        this.runningExercise = this.availableExercise.find(ex => ex.id == selectedId) 
        this.changeExercise.next({...this.runningExercise})
    }

    compleatExercise() {
        this.exercises.push(
            {...this.runningExercise,
            date: new Date(),
            state:'Completed'
        });
        this.runningExercise = null;
        this.changeExercise.next(null);
      }
    cancelExercise(process) {
        this.exercises.push({
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
        return this.exercises.slice();
    }
    getCurrentExercise() {
        return {...this.runningExercise};
    }
}