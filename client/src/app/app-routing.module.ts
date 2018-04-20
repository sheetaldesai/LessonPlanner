import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CourseComponent } from './course/course.component';
import { NewCourseComponent } from './course/new-course/new-course.component';
import { CourseResolverService } from './course-resolver.service';


const routes: Routes = [
  
  { path: 'dashboard',  component: MainComponent, pathMatch: 'full'},
  { path: 'courses', children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'new', component: NewCourseComponent, pathMatch: 'full'}, 
    {path: ':id/edit', component: NewCourseComponent, pathMatch: 'full', resolve:{course:CourseResolverService}},
    {path: ':id', component: CourseComponent, pathMatch: 'full'}
  ]},
  
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
