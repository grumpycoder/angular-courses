import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/shared/course.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { CourseResolved, ICourse } from 'src/app/models/course';

@Component({
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  pageTitle: string = 'Course Details';
  course: any;
  errorMessage: any;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) { }

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

  editCourse(): void {
    this.router.navigate(['/courses', this.course.id, 'edit']);

  }
}
