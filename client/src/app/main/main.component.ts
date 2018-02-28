import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Course} from '../course';
import {DataSource} from '@angular/cdk/collections';
import { CourseComponent } from '../course/course.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  courses : Course[];
  displayedColumns = ['title', 'description', 'startDate', 'endDate'];
  dataSource: CourseDataSource | null;
  constructor(private _dataService: DataService) { 
    console.log("main comp constructor");
  }

  ngOnInit() {
    
    console.log("main comp ngOnInit");
    this._dataService.getAllCourses();
    this.dataSource = new CourseDataSource(this._dataService);
  }

}

export class CourseDataSource extends DataSource<any> {
  courses : Course[];
  constructor(private _dataService: DataService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Course[]> {
    //this._dataService.coursesObservable.subscribe(courses=>this.courses = courses);
    
    return this._dataService.coursesObservable;
  }

  disconnect() {}
}
