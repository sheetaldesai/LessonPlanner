import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {path: 'courses/:id', component: CourseComponent},
  {path: 'main', redirectTo: '/courses/2'},
  {path: '', pathMatch: 'full', redirectTo: '/courses/2'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
