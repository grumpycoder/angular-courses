import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-program',
  templateUrl: './course-program.component.html',
  styles: []
})
export class CourseProgramComponent implements OnInit {
  course: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.course = data.resolvedData.course;
      console.log('course program', this.course);

    });
  }

}
