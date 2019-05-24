import { Component, OnInit } from '@angular/core';
import { CareerTechService } from 'src/app/shared/career-tech.service';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { ICourse } from 'src/app/models/course';

@Component({
  templateUrl: './program-list.component.html',
  styles: []
})
export class ProgramListComponent implements OnInit {
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

  onSelectionChanged(program) {
    console.log('program selected', program);
    this.selectedProgram = program;
    if (program == null) {
      this.courses = [];
      return;
    }

    this.careerTech.getCourses(program.programCode).subscribe(data => {
      console.log('data', data);

      this.courses = data;
      console.log('course', this.courses);

    });
  }
}
