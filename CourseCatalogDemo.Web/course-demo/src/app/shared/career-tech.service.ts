import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CareerTechService {
  private url: string = 'http://localhost:62634/api/careertech/';

  constructor(private http: HttpClient) { }

  addProgramCourse(course, program) {
    console.log(`add ${course.name} to ${program.name}`);

  }

  removeProgramCourse(course, program) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const address = this.url + 'programs/' + program.id + '/' + course.id + '/';
    // return this.http
    //   .post(address, options)
    //   .pipe(catchError(err => {
    //     console.log('handling error', err);
    //     return throwError(err);
    //   }), finalize(() => {
    //     console.log('finalize');

    //   }));

    return this.http
      .post(address, options)
      .pipe(catchError(this.handleError));

    // return this.http
    //   .post(address, options)
    //   .pipe(catchError(this.handleError));
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.statusText}`;
    }
    console.error(err);
    return throwError(errorMessage);

  }
}
