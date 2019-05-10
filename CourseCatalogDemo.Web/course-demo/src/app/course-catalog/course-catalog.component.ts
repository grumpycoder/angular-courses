import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/course.service';
import { ICourse } from '../models/course';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styles: []
})
export class CourseCatalogComponent implements OnInit {
  courses: ICourse[];
  currentFilter: any;
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    //this.courses = this.courseService.getCourses();
    this.courses = this.courseService.getCoursesApi();
  }

  helloWorld() {
    alert('Hello world!');
  }
}
