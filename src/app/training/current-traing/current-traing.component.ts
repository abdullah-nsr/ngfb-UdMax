import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-traing',
  templateUrl: './current-traing.component.html',
  styleUrls: ['./current-traing.component.scss']
})
export class CurrentTraingComponent implements OnInit {
  progress = 0;
  timer: number;
  constructor() { }

  ngOnInit(): void {
    this.timer = setInterval(()=>{
      this.progress = this.progress + 5;
      if(this.progress >= 100) {
        clearInterval(this.timer);
      }

    },1000)
  
  }
  onStop() {
    clearInterval(this.timer);
  }
}
