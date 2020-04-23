import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm , NgModel} from '@angular/forms'
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import 'rxjs/add/operator/map'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  excerciesSubsecription: Subscription;
  f: NgForm;
  items: Observable<any[]>;
  constructor(
    private trainingService: TrainingService
  ) {
   
   }

  ngOnInit(){
    // this.exercises = this.trainingService.getAvailableExercise();
    // this.exercises = this.db.collection('availableExercise').valueChanges();
    this.excerciesSubsecription = this.trainingService.exercisesChange.subscribe(
      exercises => this.exercises = exercises
    )
     this.trainingService.fetchAvailableExercise();
    // this.db.collection('availableExercise').snapshotChanges().subscribe(resultt => { 

    // })
  }
  onStartTraining(form: NgForm) {
    console.log(form.value.exercise)
    this.trainingService.startExercise(form.value.exercise);
  }
  ngOnDestroy() {
    this.excerciesSubsecription.unsubscribe();
  }

}
