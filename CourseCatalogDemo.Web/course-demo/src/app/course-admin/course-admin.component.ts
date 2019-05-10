import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styles: []
})
export class CourseAdminComponent implements OnInit {
  courses: any[];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCoursesApi();
  }
}
