import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Course} from '../course';
import {DataSource} from '@angular/cdk/collections';
import { CourseComponent } from '../course/course.component';
import { Observable } from 'rxjs/Observable';
import {Route, ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  courses : Course[];
  displayedColumns = ['title', 'description', 'startDate', 'endDate', "meetingDays", "actions"];
  dataSource: CourseDataSource | null;
  constructor(private _dataService: DataService,
              private router: Router) { 
    console.log("main comp constructor");
    console.log('configured routes: ', this.router.config);
  }

  ngOnInit() {
    
    console.log("main comp ngOnInit");
    this._dataService.getAllCourses();
    this.dataSource = new CourseDataSource(this._dataService);
  }

  editCourse(course: Course) {
    console.log("edit course: ", course);
  }

  deleteCourse(course: Course) {
    console.log("delete course: ", course);
    this._dataService.delete(course);
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
