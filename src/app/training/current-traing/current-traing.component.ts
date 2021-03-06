import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-current-traing',
  templateUrl: './current-traing.component.html',
  styleUrls: ['./current-traing.component.scss']
})
export class CurrentTraingComponent implements OnInit {
  progress = 0;
  timer:any;

  constructor(private dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.onStartOrResumeTimer();
  }
  onStartOrResumeTimer() {
    const step = this.trainingService.getCurrentExercise().duration / 100 * 1000;
    this.timer = setInterval(()=>{
      this.progress = this.progress + 1;
      if(this.progress >= 100) {
        this.trainingService.compleatExercise();
        clearInterval(this.timer);
      }
    },step)
  }


  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data:{
        progress: this.progress
      } 
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.onStartOrResumeTimer()
      }
    })
  }
}
