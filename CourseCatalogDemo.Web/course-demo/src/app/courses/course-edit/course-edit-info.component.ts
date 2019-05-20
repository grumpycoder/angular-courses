import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { LookupService } from 'src/app/shared/lookup.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-edit-info',
  templateUrl: './course-edit-info.component.html',
  styles: []
})
export class CourseEditInfoComponent implements OnInit {
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
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.schoolYears = this.lookup.getServiceYears();
      this.creditTypes = this.lookup.getCreditTypes();
      this.courseTypes = this.lookup.getCourseTypes();
      this.classTypes = this.lookup.getClassTypes();
      this.subjectAreas = this.lookup.getSubjectAreas();
      this.grades = this.lookup.getGrades();

      this.courseService.getCourse(id).subscribe(data => {
        this.course = data;
      });
    });
  }

  onSubmit(formValues) {
    this.courseService.saveCourse(this.course).subscribe(() => {
      console.log('saved');
    });
  }

}
