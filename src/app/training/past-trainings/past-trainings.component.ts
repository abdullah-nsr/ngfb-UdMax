import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'
import { Exercise } from '../exercise.model';
import { viewClassName } from '@angular/compiler';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit, OnDestroy {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  private finishedExcerciesChangedSubsectibtion: Subscription;

  @ViewChild(MatSort, {static: true}) sort: MatSort; 
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {

    this.finishedExcerciesChangedSubsectibtion = this.trainingService.finishedExcerciesChanged
    .subscribe((exercies: Exercise[]) => {
      console.log( exercies)
      this.dataSource.data = exercies;
    })
    this.trainingService.getCancelOrCompleatExercise();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterString: string){
    this.dataSource.filter = filterString.trim().toLowerCase()
  }
  ngOnDestroy() {
    this.finishedExcerciesChangedSubsectibtion.unsubscribe();
  }
}
