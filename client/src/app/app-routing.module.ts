import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CourseComponent } from './course/course.component';
import { NewCourseComponent } from './new-course/new-course.component';

const routes: Routes = [
  {path: 'courses/:id', component: CourseComponent, pathMatch: 'full'},
  {path: 'main', component: MainComponent, pathMatch: 'full'},
  {path: 'new', component: NewCourseComponent, pathMatch: 'full'},
  {path: '', pathMatch: 'full', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
