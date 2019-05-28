import { Component, OnInit } from '@angular/core';
import { CareerTechService } from 'src/app/shared/career-tech.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { ICourse } from 'src/app/models/course';
import { IProgram } from 'src/app/models/program';
import { LookupService } from 'src/app/shared/lookup.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styles: []
})
export class ProgramsComponent implements OnInit {
  programs: any;
  datasource: any;
  data: DataSource;
  selectedProgram: any;
  courses: ICourse[];
  program: IProgram;
  schoolYears: any;
  programTypes: { id: number; name: string; code: string; }[];

  constructor(private careerTech: CareerTechService, private lookup: LookupService) { }

  ngOnInit() {
    this.schoolYears = this.lookup.getServiceYears();
    this.programTypes = this.lookup.getProgramTypes();

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
    if (program == null) {
      this.courses = [];
      this.program = null;
      return;
    }

    this.careerTech.getProgramEdit(program.programId).subscribe(data => {
      this.program = data;
    });

    this.careerTech.getCourses(program.programCode).subscribe(data => {
      this.courses = data;
    });
  }

  onSubmit(formValues) {
    console.log('form', formValues);

    this.careerTech.saveProgram(this.program).subscribe(() => {
      console.log('update program');
    });
  }

}
