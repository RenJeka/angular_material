import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";


interface Exercise {
  date: Date;
  name: string;
  duration: number;
  calories: number;
  state: boolean;
}

const MOCK_DATA_EXERCIDES: Exercise[] = [
  {date: new Date() , name: 'exercise1', duration: 10, calories: 10, state: true},
  {date: new Date(), name: 'exercise2', duration: 20, calories: 22, state: true},
  {date: new Date(), name: 'exercise3', duration: 30, calories: 33, state: true},
  {date: new Date(), name: 'exercise4', duration: 40, calories: 44, state: true},
  {date: new Date(), name: 'exercise5', duration: 50, calories: 55, state: true},
]

@Component({
  selector: 'app-mat-table-one',
  templateUrl: 'mat-table-one.component.html',
  styles: [
  ]
})
export class MatTableOneComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = MOCK_DATA_EXERCIDES;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}
