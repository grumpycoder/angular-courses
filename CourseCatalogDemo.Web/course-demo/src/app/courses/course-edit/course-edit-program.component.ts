import { Component, OnInit } from '@angular/core';
import { LookupService } from 'src/app/shared/lookup.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-edit-program',
  templateUrl: './course-edit-program.component.html',
  styles: []
})
export class CourseEditProgramComponent implements OnInit {
  programs: { id: number; programCode: string; name: string; }[];
  course: any;
  constructor(private route: ActivatedRoute, private lookup: LookupService) { }

  ngOnInit() {
    this.programs = this.lookup.getPrograms();
    this.route.parent.data.subscribe(data => {
      this.course = data.resolvedData;
    });
  }

}
