import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as moment from 'moment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { MainComponent } from './main/main.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CourseComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
