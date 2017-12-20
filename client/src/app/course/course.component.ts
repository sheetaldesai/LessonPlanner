import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import * as moment from 'moment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course;
  selectedDate: moment.Moment;
  currentWeek: moment.Moment[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.course = this._dataService.course;
    this.createWeek(this.course.startDate);
    console.log(this.course.topics.length)
  }

  createWeek(selectedDay) {
    this.selectDay(selectedDay);
    this.currentWeek[0] = this.selectedDate.clone().startOf('week');
    for (let i = 1; i < 7; i++) {
      this.currentWeek[i] = this.currentWeek[i - 1].clone().add(1, 'day');
    }
    this.currentWeek[this.selectedDate.weekday()] = this.selectedDate;

  }

  selectDay(day) {
    if (moment.isMoment(day)) {
      this.selectedDate = day;
    } else {
      this.selectedDate = moment(day);
    }
  }

}
