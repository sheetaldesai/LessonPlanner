import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Topic } from '../topic';
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
  undatedTopics: Topic[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.course = this._dataService.course;
    this.createWeek(this.course.startDate);
    for (let topic of this.course.topics) {
      if (!topic.lessonDate) {
        this.undatedTopics.push(topic);
      }
    }
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
    this._dataService.getTopics(this.course.id, this.selectedDate);
  }

  remove(topic: Topic) {
    const day = moment(topic.lessonDate);
    topic.lessonDate = undefined;
    this.undatedTopics.push(topic);
    this._dataService.getTopics(this.course.id, day);
  }

  topicsOnDay(day: moment.Moment): Topic[] {
      return this.course.topics.filter(topic => moment(topic.lessonDate).isSame(day));
  }

  courseDayPickerFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return this.course.meetingDays.includes(day);
  }

  submitDate(event) {
    console.log(event);
  }

  addTopicToDay(day: moment.Moment, topic: Topic) {
    let idx = this.undatedTopics.indexOf(topic);
    this.undatedTopics.splice(idx, 1);
    topic.lessonDate = day.toDate();
    this._dataService.getTopics(this.course.id, day);
  }

}
