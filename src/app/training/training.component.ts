import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { TrainingService } from './training.service';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit, OnDestroy {
  onGoingTraining = false;
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.changeExercise.subscribe(
      exercise => {
        if(exercise) {
          console.log(exercise);
          this.onGoingTraining = true;
        } else { 
          this.onGoingTraining = false;
        }

      })
  }
  ngOnDestroy() {
    if(this.exerciseSubscription) {
        this.exerciseSubscription.unsubscribe();
    }
  }

}
