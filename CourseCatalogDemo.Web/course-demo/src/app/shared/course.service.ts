import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url = 'http://localhost:62634/api/courses';
  dataSource: any;

  constructor(private http: HttpClientModule) {
    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: this.url
      //  onBeforeSend: function(method, ajaxOptions) {
      //    ajaxOptions.xhrFields = { withCredentials: true };
      //  }
    });
  }

  getCoursesApi(): any[] {
    return this.dataSource;
  }

}
