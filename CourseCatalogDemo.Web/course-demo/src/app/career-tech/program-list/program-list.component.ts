import { Component, OnInit, OnDestroy } from '@angular/core';
import { CareerTechService } from 'src/app/shared/career-tech.service';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { ICourse } from 'src/app/models/course';

@Component({
  templateUrl: './program-list.component.html',
  styles: []
})
export class ProgramListComponent implements OnInit, OnDestroy {
  pageTitle = 'Program Catalog';
  programs: any;
  datasource: any;
  data: DataSource;
  selectedProgram: any;
  courses: ICourse[];

  constructor(private careerTech: CareerTechService) { }

  ngOnInit() {
    this.careerTech.getPrograms().subscribe(data => {
      this.data = new DataSource({
        store: new ArrayStore({
          data,
          key: 'id'
        }),
        group: 'clusterName'
      });
    });
  }
  ngOnDestroy() {
    //this.careerTech.unsubscribe();

  }

  onSelectionChanged(program) {
    this.selectedProgram = program;
    if (program == null) {
      this.courses = [];
      return;
    }

    this.careerTech.Courses(program.programCode).subscribe(data => {
      this.courses = data;
    });
  }
}
