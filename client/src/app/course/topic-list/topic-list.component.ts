import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../../data.service';
import { Topic } from '../../topic';
import { MatCardModule } from '@angular/material/card';
import * as moment from 'moment';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  @Input() courseId;
  @Input() selectedDate;
  topics: Topic[] = [];

  constructor(private _dataService : DataService) {
    console.log("CourseId: ", this.courseId);
    console.log("selectedDate: ", this.selectedDate)

   }

  ngOnInit() {
    this._dataService.currentTopics.subscribe(
      (value) => this.topics = value
    );
  }

  ngOnChanges() {
    console.log("changes to selected date: ", this.selectedDate);
    // this._dataService.getTopics(this.courseId, this.selectedDate);
    console.log(this.topics);
  }

  remove(topic: Topic) {
    const day = moment(topic.lessonDate);
    topic.lessonDate = undefined;
    this._dataService.getUndatedTopics(this.courseId);
    this._dataService.getTopics(this.courseId, day);
  }



}
