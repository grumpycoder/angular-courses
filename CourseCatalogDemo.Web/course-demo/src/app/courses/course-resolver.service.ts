import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CourseResolved, ICourse } from '../models/course';
import { Observable } from 'rxjs';
import { CourseService } from '../shared/course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<ICourse> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICourse> {
    const id = +route.paramMap.get('id');
    return this.courseService.getCourse(id);
  }

  constructor(private courseService: CourseService) { }

}
