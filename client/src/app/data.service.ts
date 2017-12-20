import { Injectable } from '@angular/core';
import { Course } from './course';
import { Topic } from './topic';
import * as moment from 'moment';

@Injectable()
export class DataService {
  course = new Course(
    '2',
    'Sara',
    'Data Structures 101',
    'This class will prepare you to know basic data structures for most programming languages.',
    moment('01/08/18').toDate(),
    moment('05/12/18').toDate(),
    [1, 3, 5],
    80,
    []
  );

  constructor() {
    this.addTopics();
   }

  addTopics = function() {
    this.course.topics.push(
      new Topic(
        '100',
        'Arrays',
        moment('01/08/18').toDate(),
        'Lecture',
        45,
        [],
        this.course.id,
      )
    );
    this.course.topics.push(
      new Topic(
        '101',
        'Push and Pop Lab',
        moment('01/08/18').toDate(),
        'Lab',
        35,
        [],
        this.course.id,
      )
    );
    this.course.topics.push(
      new Topic(
        '110',
        'Arrays Quiz',
        moment('01/10/18').toDate(),
        'Quiz',
        10,
        [],
        this.course.id,
      )
    );
    this.course.topics.push(
      new Topic(
        '111',
        'Singly Linked Lists',
        moment('01/10/18').toDate(),
        'Group Activity',
        45,
        [],
        this.course.id,
      )
    );
    this.course.topics.push(
      new Topic(
        '200',
        'Beginning Check In',
        moment('01/12/18').toDate(),
        'Exam',
        80,
        [],
        this.course.id,
      )
    );
    this.course.topics.push(
      new Topic(
        '111',
        'Doubly Linked Lists',
        moment('01/17/18').toDate(),
        'Lecture',
        45,
        [],
        this.course.id,
      )
    );
  };


}
