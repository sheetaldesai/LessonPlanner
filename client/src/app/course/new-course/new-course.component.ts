import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../course';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  course = new Course;
  edit = false;
  title = "Add New Course"
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
  
  constructor(private _dataService: DataService, 
              private _router : Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log("New comp loaded");
    this._route.paramMap.subscribe( params => {
      console.log("params: ", params);
      var id = params.get('id');
      console.log("id:", id);
      if (id) {
          this.edit = true;
          this.title = "Edit Course"
          // this._dataService.getCourse(id);
          // this._dataService.courseObservable.subscribe(
          //   (value) => {
          //     this.course = value[0];
          //     console.log("Got course: ", this.course);
          //     for (var i=0; i < this.course.meetingDays.length; i++){
          //       var day = this.days.find(el =>  {return el.value === this.course.meetingDays[i]});
          //       day.checked = true;
          //       console.log("day: ", day);
          //     }
          //     console.log("all days: ", this.days);
          //   }  
          // );
          this._route.data.subscribe(({course})=>{
            this.course = course[0];
            console.log("Got course: ", this.course);
              for (var i=0; i < this.course.meetingDays.length; i++){
                var day = this.days.find(el =>  {return el.value === this.course.meetingDays[i]});
                day.checked = true;
                console.log("day: ", day);
              }
              console.log("all days: ", this.days);
          });
      } else {
        console.log("Id not found");
      }

    });
  }

  onSubmit() {
    if (this.edit) {
      console.log("edit course ", this.course);
      //this.course.meetingDays = this.days.filter(day=>day.checked == true).map(val=>{return val.value});
      this._dataService.editCourse(this.course);
    } else {
      this.course.teacher = "Sara";
      console.log("Submit clicked course: ", this.course);
      //this.course.meetingDays = this.days.filter(day=>day.checked == true).map(val=>{return val.value});
      console.log(this.course.meetingDays);
      delete this.course._id;
      this._dataService.create(this.course);
    }
    
    this._router.navigate(['/dashboard']);
  }

  cancel() {
    this._router.navigate(['/dashboard']);
  }

  selectDays(meetingDays, day, $event) {
    if ($event.checked) {
      console.log(`Adding ${day.value} to meetingDays`);
      meetingDays.push(day.value);
    } else {
      console.log(`Removing ${day.value} from meetingDays`);
      meetingDays.splice(meetingDays.indexOf(day.value),1);
    }
    console.log("MeetingDays: ",meetingDays);
  }

}
