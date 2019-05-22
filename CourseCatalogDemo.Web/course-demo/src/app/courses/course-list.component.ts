import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/course.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './course-list.component.html',
  styles: []
})
export class CourseListComponent implements OnInit {
  courses: any[];
  currentFilter: any;

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {

    this.courses = this.courseService.getCoursesApi();
  }

  onSelectionChanged($event) {
    // console.log('changed', $event);
  }

  editCourse(data) {
    console.log('edit', data.row.data);
  }
}
