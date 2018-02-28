import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../../data.service';
import { Topic } from '../../topic';
import { MatCardModule } from '@angular/material/card';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as moment from 'moment';
import { TopicFormComponent } from '../topic-form/topic-form.component';
import { AddSubtopicComponent } from './add-subtopic/add-subtopic.component';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  @Input() courseId;
  @Input() selectedDate;
  topics: Topic[] = [];
  newTopic = "";

  constructor(private _dataService : DataService,
              public dialog: MatDialog) {
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

  editTopics() {
    let dialogRef = this.dialog.open(TopicFormComponent, {
      width: '250px',
      data: { name: "Sheetal", animal: "Dog" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log("Result: ", result);
    });
  }

  addSubTopic(topic: Topic) {
   
   

    let dialogRef = this.dialog.open(AddSubtopicComponent, {
      width: '250px',
      data: { newTopic: this.newTopic, title: topic.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed result: ', result);
      this.newTopic = result;
      topic.subTopics.push(this.newTopic);
    });
  }

}









