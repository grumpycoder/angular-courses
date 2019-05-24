import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseResolved, ICourse } from 'src/app/models/course';

@Component({
  templateUrl: './course-edit.component.html',
  styles: []
})
export class CourseEditComponent implements OnInit {
  errorMessage: any;
  course: ICourse;
  pageTitle: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const resolvedData: CourseResolved = data.resolvedData;
      this.errorMessage = resolvedData.error;
      this.onCourseRetrieved(resolvedData.course);
    });
  }

  onCourseRetrieved(course: ICourse): void {
    this.course = course;
    if (this.course) {
      this.pageTitle = `Course Detail: ${this.course.name} (${this.course.courseCode})`;
    } else {
      this.pageTitle = 'No course found';
    }
  }
}
