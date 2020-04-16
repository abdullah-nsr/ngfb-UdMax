import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm , NgModel} from '@angular/forms'
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  exercises: Observable<any>;
  f: NgForm;
  items: Observable<any[]>;
  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore
  ) {
   
   }

  ngOnInit(): void {
    // this.exercises = this.trainingService.getAvailableExercise();
    this.exercises = this.db.collection('availableExercise').valueChanges();
    this.db.collection('availableExercise').snapshotChanges().subscribe(result => console.log(result))
    // this.db.collection('availableExercise').snapshotChanges().subscribe(resultt => { 

    // })
  }
  onStartTraining(form: NgForm) {
    console.log(form.value.exercise)
    this.trainingService.startExercise(form.value.exercise);
  }

}
