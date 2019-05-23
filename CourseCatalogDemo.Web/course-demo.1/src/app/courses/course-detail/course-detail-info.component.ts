import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-detail-info.component.html',
  styles: []
})
export class CourseDetailInfoComponent implements OnInit {
  course: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.course = data.resolvedData.course;
    });
  }

}
