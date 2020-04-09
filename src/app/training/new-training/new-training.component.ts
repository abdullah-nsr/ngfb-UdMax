import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  @Output() StartTraining = new EventEmitter();
  trraings = [{name: 'crunches'}, {name: 'side-toes'}, {name: 'side-lunges'}];

  constructor() { }

  ngOnInit(): void {
  }
  onStartTraining() {
    this.StartTraining.emit();
  }

}
