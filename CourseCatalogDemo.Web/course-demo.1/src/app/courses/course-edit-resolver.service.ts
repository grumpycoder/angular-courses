import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CourseResolved } from '../models/course';
import { map, catchError } from 'rxjs/operators';
import { CourseService } from '../shared/course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseEditResolver {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CourseResolved> {
    const id = +route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Course Id was not a number: ${id}`;
      console.log(message);
      return of({ course: null, error: message });
    }
    return this.courseService.getCourseEdit(id).pipe(
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
