import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/shared/course.service';
import { LookupService } from 'src/app/shared/lookup.service';

@Component({
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
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
        console.log(this.course);

      });
    });
  }
}
