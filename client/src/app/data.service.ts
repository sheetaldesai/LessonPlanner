import { Injectable } from '@angular/core';
import { Course } from './course';
import { Topic } from './topic';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  days = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];

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
  currentTopics: BehaviorSubject<any[]> = new BehaviorSubject([]);
  undatedTopics: BehaviorSubject<any[]> = new BehaviorSubject([]);
  coursesObservable: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
  courseObservable: BehaviorSubject<Course> = new BehaviorSubject(new Course());

  constructor(private _http : HttpClient) {
    this.addTopics();
    this.getUndatedTopics(this.course._id);
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
        '1000',
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
        '1001',
        'Doubly Linked Lists',
        moment('01/17/18').toDate(),
        'Lecture',
        45,
        [],
        [],
        this.course.id,
      )
    );
    this.course.topics.push(
      new Topic(
        '1010',
        'Strings',
        undefined,
        'Lecture',
        30,
        ['Double and single quotes', 'Concatination'],
        ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'],
        this.course.id,
      )
    );
    this.course.topics.push(
      new Topic(
        '1011',
        'Dictionaries',
        undefined,
        'Lab',
        40,
        ['Key value pairs', 'Map Vs. Dictionary', 'Adding and removing'],
        [],
        this.course.id,
      )
    );
  };

  getTopics(courseId: String, selectedDate: moment.Moment) {
    this.currentTopics.next(
      this.course.topics.filter(topic => moment(topic.lessonDate).isSame(selectedDate))
    );
  }
  getUndatedTopics(courseId: String) {
    this.undatedTopics.next(this.course.topics.filter(topic => !topic.lessonDate));
  }

  getAllCourses() {
    this._http.get('/courses')
    // .map(course=>
    //   {
    //     course["meetingDays"].forEach(element => {
    //     element = this.days[element];
    //     console.log("meetingDays: ", element);
    //   })
    // })
    .subscribe(
      (courses : any[])=>{
        console.log("Got courses from server: ",courses);
        this.coursesObservable.next(courses)
      }),
      error => console.log(error);
    
  }

  getCourse(id) {
    // this._http.get('/courses/'+id).subscribe(
    //   (course : Course)=>{
    //     console.log("Got courses from server: ",course);
    //     this.courseObservable.next(course);
        
    //   }),
    //   error => console.log(error);
    return this._http.get('/courses/'+id);


  }

  create(course: Course) {

    console.log("Service creating new course: ",course);
    this._http.post('/course', course).subscribe(
      response => this.getAllCourses(),
      errorResponse => console.log(errorResponse)
    );
  }

  editCourse(c: Course) {
    console.log("Dataservice editing course ", c);
    this._http.put('courses/'+c._id, c).subscribe(
      response => console.log(response)
    );
    
  }

  delete(course){
    console.log("Service deleting course ", course);
    this._http.delete('/courses/'+course._id).subscribe(response => {
      console.log(response);
      this.getAllCourses();
    });
  }
}

