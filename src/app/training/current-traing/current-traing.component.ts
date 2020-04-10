import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-traing',
  templateUrl: './current-traing.component.html',
  styleUrls: ['./current-traing.component.scss']
})
export class CurrentTraingComponent implements OnInit {
  progress = 0;
  timer: number;

  @Output() ExitTraining = new EventEmitter();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.onStartOrResumeTimer();
  }
  onStartOrResumeTimer() {
    this.timer = setInterval(()=>{
      this.progress = this.progress + 5;
      if(this.progress >= 100) {
        clearInterval(this.timer);
      }
    },1000)
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
        this.ExitTraining.emit()
      } else {
        this.onStartOrResumeTimer()
      }
    })
  }
}
