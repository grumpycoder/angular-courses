import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { LookupService } from 'src/app/shared/lookup.service';
import { ICourse } from 'src/app/models/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styles: [
    `
      pre {
        background-color: gainsboro;
      }
    `
  ]
})
export class CourseDetailComponent implements OnInit, OnChanges {
  @Input() selectedCourse;
  schoolYears: any[];
  creditTypes: any[];
  courseTypes: any[];
  classTypes: any[];
  subjectAreas: any[];
  course: any = {};

  constructor(private courseService: CourseService, private lookup: LookupService) {}

  ngOnInit() {
    this.courseService.getCourse(this.selectedCourse.id).subscribe(data => {
      this.course = data;
      console.log('retrieved course', this.course);
    });
    this.schoolYears = this.lookup.getServiceYears();
    this.creditTypes = this.lookup.getCreditTypes();
    this.courseTypes = this.lookup.getCourseTypes();
    this.classTypes = this.lookup.getClassTypes();
    this.subjectAreas = this.lookup.getSubjectAreas();

    console.log(this.schoolYears);
  }

  onSubmit(formValues) {
    // console.log('formValues', formValues);
    this.courseService.saveCourse(formValues).subscribe(() => {
      console.log('saved');
    });

    //this.courseService.saveCourse(formValues);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.courseService.getCourse(this.selectedCourse.id).subscribe(data => {
      this.course = data;
      console.log('retrieved course', this.course);
    });
  }
}
