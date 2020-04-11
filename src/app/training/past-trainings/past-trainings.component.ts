import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'
import { Exercise } from '../exercise.model';
import { viewClassName } from '@angular/compiler';
@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource(this.trainingService.exercises);

  @ViewChild(MatSort, {static: true}) sort: MatSort; 
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    console.log(this.trainingService.exercises);

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterString: string){
    this.dataSource.filter = filterString.trim().toLowerCase()
  }
}
