import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styles: []
})
export class CourseCatalogComponent implements OnInit {
  courses: any[];
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    console.log('courses', this.courses);
  }
}
