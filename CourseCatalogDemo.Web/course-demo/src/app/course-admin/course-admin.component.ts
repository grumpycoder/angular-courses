import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styles: []
})
export class CourseAdminComponent implements OnInit {
  courses: any[];
  course: any;
  selectedCourse: any;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCoursesApi();
    //this.course = this.courseService.getCourse(2);
  }

  onSelectionChanged($event) {
    this.course = this.courseService.getCourse($event.addedItems[0].id);
    this.selectedCourse = { ...$event.addedItems[0] };
    // console.log('selectedCourse', this.selectedCourse);
    // console.log('returned course', this.course);
  }
}
