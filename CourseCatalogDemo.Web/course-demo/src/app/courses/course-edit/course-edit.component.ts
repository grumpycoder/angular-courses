import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/shared/course.service';
import { LookupService } from 'src/app/shared/lookup.service';

@Component({
  templateUrl: './course-edit.component.html',
  styles: []
})
export class CourseEditComponent implements OnInit {
  pageTitle: string = 'Course Edit';

  constructor() { }

  ngOnInit() {
  }
}
