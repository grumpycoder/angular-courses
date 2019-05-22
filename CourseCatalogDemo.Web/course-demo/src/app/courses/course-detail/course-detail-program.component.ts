import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail-program',
  templateUrl: './course-detail-program.component.html',
  styles: []
})
export class CourseDetailProgramComponent implements OnInit {
  course: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.course = data.resolvedData.course;
      console.log('course program', this.course);

    });
  }

}
