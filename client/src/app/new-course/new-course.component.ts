import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  course = new Course();
  days = [
    {name:"Sun", value:0, checked: false},
    {name:"Mon", value:1, checked: false},
    {name:"Tue", value:2, checked: false},
    {name:"Wed", value:3, checked: false},
    {name:"Thur", value:4, checked: false},
    {name:"Fri", value:5, checked: false},
    {name:"Sat", value:6, checked: false},
    ];

  myDate = new Date();
  
  constructor(private _dataService: DataService, private _router : Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.course.teacher = "Sara";
    console.log("Submit clicked course: ", this.course);
    this.course.meetingDays = this.days.filter(day=>day.checked == true).map(val=>{return val.value});
    console.log(this.course.meetingDays);
    delete this.course._id;
    this._dataService.create(this.course);
    
    this._router.navigate(['/main']);
  }

}
