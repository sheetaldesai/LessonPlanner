import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatFormFieldModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatCheckboxModule, 
  MatSelectModule,
  
  } from '@angular/material'; // add more stuff as needed, this was just random for now

import * as moment from 'moment';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { MainComponent } from './main/main.component';
import { TopicListComponent } from './course/topic-list/topic-list.component';
import { EditTopicDialogComponent } from './course/edit-topic-dialog/edit-topic-dialog.component'; 
import { TopicFormComponent } from './course/topic-form/topic-form.component';
import { AddSubtopicComponent } from './course/topic-list/add-subtopic/add-subtopic.component';
import { NewCourseComponent } from './course/new-course/new-course.component';
import { CourseResolverService } from './course-resolver.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CourseComponent,
    MainComponent,
    EditTopicDialogComponent,
    TopicListComponent,
    TopicFormComponent,
    AddSubtopicComponent,
    NewCourseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,

  ],
  entryComponents: [
    TopicFormComponent,
    AddSubtopicComponent
  ],
  providers: [DataService,CourseResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
