import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CourseResolved, ICourse } from '../models/course';
import { Observable, of } from 'rxjs';
import { CourseService } from '../shared/course.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<CourseResolved> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CourseResolved> {
    const id = +route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Course Id was not a number: ${id}`;
      console.log(message);
      return of({ course: null, error: message });
    }
    return this.courseService.getCourse(id).pipe(
      map(course => ({ course: course })),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        console.log(message);
        return of({ course: null, error: message });
      })
    );
  }

  constructor(private courseService: CourseService) { }

}
