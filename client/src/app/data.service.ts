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
        ["Introduction","Copying of arrays", "Insertion and Deletion", "Arrays of Objects", "Multi-dimentional Arrays"],
        ["https://www.cs.cmu.edu/~adamchik/15-121/lectures/Arrays/arrays.html",
        "Introduction to Algorithms by Thomas H. Cormen, Charles E. Leiserson and Ronald L. Rivest"],
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
        ["Push and Pop", "Splice", "Filter", "Sort"],
        ["https://www.youtube.com/watch?v=L06uGnF4IpY"],
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
        ["Quiz that will cover reading, copying and inserting and deleting arrays"],
        ["http://web.cs.iastate.edu/~honavar/JavaNotes/Notes/chap46/chap46quiz.html"],
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
        ["Introduction", "Linked Lists vs Arrays", "Insertion and Deletion", "Find Lenght", "Find Element"],
        ["http://www.geeksforgeeks.org/data-structures/linked-list/", "https://www.cs.utexas.edu/~scottm/cs314/handouts/slides/topic11LinkedLists.pdf","https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html"],
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
        [],
        this.course.id,
      )
    );
  };

  getTopics(courseId: String, selectedDate: moment.Moment) : Topic[] {
    return this.course.topics.filter(topic=>moment(topic.lessonDate).isSame(selectedDate));
  }


}
