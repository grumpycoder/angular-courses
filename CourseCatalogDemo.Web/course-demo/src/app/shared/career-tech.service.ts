import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

import { ICluster } from '../models/cluster';
import { IProgram } from '../models/program';
import { ICourse } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CareerTechService {
  private url = 'http://localhost:62634/api/careertech/';
  clusterDataSource: any;
  programDataSource: any;

  constructor(private http: HttpClient) {
    this.clusterDataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: this.url
      //  onBeforeSend: function(method, ajaxOptions) {
      //    ajaxOptions.xhrFields = { withCredentials: true };
      //  }
    });


  }

  getClusters() {
    // return this.http.get<ICourse>(this.url + '/' + id + '/edit/full');
    return this.http.get(this.url + '/clusters?year=2019');
  }

  getClusterDetails(clusterCode): Observable<ICluster> {
    // return this.http.get<ICourse>(this.url + '/' + id + '/edit/full');
    return this.http.get<ICluster>(this.url + `clusters/code/${clusterCode}`);
  }

  getProgramsDataSource() {
    return AspNetData.createStore({
      key: 'id',
      loadUrl: this.url + 'programs/2017'
      //  onBeforeSend: function(method, ajaxOptions) {
      //    ajaxOptions.xhrFields = { withCredentials: true };
      //  }
    });
  }

  getPrograms(): Observable<IProgram[]> {
    return this.http.get<IProgram[]>(this.url + 'programs');
  }

  getCourses(programCode: string): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.url}programs/${programCode}/courses`);
  }

  saveCluster(cluster) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http
      .put<ICluster>(this.url + '/clusters', cluster, options)
      .pipe(catchError(this.handleError));
  }

  removeClusterProgram(cluster, program) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const address = this.url + `clusters/${cluster.id}/${program.id}`;
    console.log('address', address);

    return this.http
      .delete(address, options)
      .pipe(catchError(this.handleError));
  }

  addProgramCourse(course, program) {
    console.log(`add ${course.name} to ${program.name}`);
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const address = this.url + '/programs/' + program.id + '/' + course.id + '/';
    return this.http
      .post(address, options)
      .pipe(catchError(this.handleError));
  }

  removeProgramCourse(course, program) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const address = this.url + '/programs/' + program.id + '/' + course.id + '/';
    return this.http
      .delete(address, options)
      .pipe(catchError(this.handleError));
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