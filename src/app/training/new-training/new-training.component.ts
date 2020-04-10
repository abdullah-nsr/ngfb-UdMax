import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm , NgModel} from '@angular/forms'
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise [] = []
  f: NgForm;
  constructor(private trainingService: TrainingService ) { }

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercise()
  }
  onStartTraining(form: NgForm) {
    console.log(form.value.exercise)
    this.trainingService.startExercise(form.value.exercise);
  }

}
