import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';
import { Course } from './course';

@Injectable()
export class CourseResolverService implements Resolve<any>{

  id;

  constructor(
    private _dataService: DataService,
    private router : Router
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log("In resolver");
    return this._dataService.getCourse(route.paramMap.get('id'));
  }
  

}
