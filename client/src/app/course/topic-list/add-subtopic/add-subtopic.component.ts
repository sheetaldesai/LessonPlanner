import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Course } from '../../../course';

@Component({
  selector: 'app-add-subtopic',
  template: 'passed in {{ data.title }}',
  templateUrl: './add-subtopic.component.html',
  styleUrls: ['./add-subtopic.component.css']
})
export class AddSubtopicComponent implements OnInit {
  dataSource : Course[];

  constructor(public dialogRef: MatDialogRef<AddSubtopicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
