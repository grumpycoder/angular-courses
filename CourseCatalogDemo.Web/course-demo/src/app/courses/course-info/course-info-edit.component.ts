import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { LookupService } from 'src/app/shared/lookup.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './course-info-edit.component.html',
  styles: []
})
export class CourseInfoEditComponent implements OnInit {
  @ViewChild(NgForm) courseForm: NgForm;

  pageTitle = 'Course Edit';
  course: any;
  schoolYears: { id: number; year: number; }[];
  creditTypes: { id: number; name: string; }[];
  courseTypes: { id: number; code: string; name: string; }[];
  classTypes: { id: number; name: string; }[];
  subjectAreas: { id: number; name: string; }[];
  grades: { id: number; grade: string; name: string; }[];

  constructor(private courseService: CourseService, private lookup: LookupService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.course = data.resolvedData.course;
    });

    this.courseService.getCourseEdit(this.course.id).subscribe(data => {
      console.log('course data', data);
      this.course = data;
    })
    this.schoolYears = this.lookup.getServiceYears();
    this.creditTypes = this.lookup.getCreditTypes();
    this.courseTypes = this.lookup.getCourseTypes();
    this.classTypes = this.lookup.getClassTypes();
    this.subjectAreas = this.lookup.getSubjectAreas();
    this.grades = this.lookup.getGrades();
  }

  onSubmit(formValues) {
    this.courseService.saveCourse(this.course).subscribe(() => {
      console.log('update course');
    });
  }

}
