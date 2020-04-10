import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  @Output() StartTraining = new EventEmitter();
  exercises: Exercise[] = []

  constructor(private trainingService: TrainingService ) { }

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercise();
  }
  onStartTraining() {
    this.StartTraining.emit();
  }

}
