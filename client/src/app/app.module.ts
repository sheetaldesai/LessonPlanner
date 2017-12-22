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
  MatButtonModule } from '@angular/material'; // add more stuff as needed, this was just random for now


import * as moment from 'moment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { MainComponent } from './main/main.component';

import { DataService } from './data.service';
import { TopicListComponent } from './course/topic-list/topic-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CourseComponent,
    MainComponent,
    TopicListComponent
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
    MatListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
