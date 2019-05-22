import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/shared/course.service';
import { LookupService } from 'src/app/shared/lookup.service';
import { ICourse, CourseResolved } from 'src/app/models/course';

@Component({
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  [x: string]: any;
  pageTitle: string = 'Course Edit';
  course: any;
  schoolYears: { id: number; year: number; }[];
  creditTypes: { id: number; name: string; }[];
  courseTypes: { id: number; code: string; name: string; }[];
  classTypes: { id: number; name: string; }[];
  subjectAreas: { id: number; name: string; }[];
  grades: { id: number; grade: string; name: string; }[];

  constructor(private route: ActivatedRoute, private lookup: LookupService, private courseService: CourseService) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      const resolvedData: CourseResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onCourseRetrieved(resolvedData.course);
    });

    // this.route.paramMap.subscribe(params => {
    //   const id = +params.get('id');
    //   this.schoolYears = this.lookup.getServiceYears();
    //   this.creditTypes = this.lookup.getCreditTypes();
    //   this.courseTypes = this.lookup.getCourseTypes();
    //   this.classTypes = this.lookup.getClassTypes();
    //   this.subjectAreas = this.lookup.getSubjectAreas();
    //   this.grades = this.lookup.getGrades();

    //   this.courseService.getCourseEdit(id).subscribe(data => {
    //     this.course = data;
    //     console.log('parent data', data);

    //     console.log('course edit', this.course);

    //   });
    // });
  }

  onCourseRetrieved(course: ICourse): void {
    console.log('retrieved course', course);
    this.course = course;
    if (this.course) {
      this.pageTitle = `Course Detail: ${this.course.name} (${this.course.courseCode})`;
    } else {
      this.pageTitle = 'No course found';
    }
  }

}
