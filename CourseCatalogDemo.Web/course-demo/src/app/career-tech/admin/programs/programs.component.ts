import { Component, OnInit } from '@angular/core';
import { CareerTechService } from 'src/app/shared/career-tech.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { ICourse } from 'src/app/models/course';
import { IProgram, IProgramEdit } from 'src/app/models/program';
import { LookupService } from 'src/app/shared/lookup.service';
import { CourseService } from 'src/app/shared/course.service';

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
  availableCourses: ICourse[];
  program: IProgramEdit;
  schoolYears: any;
  programTypes: { id: number; name: string; code: string; }[];
  clusters: any;

  constructor(
    private careerTech: CareerTechService,
    private courseService: CourseService,
    private lookup: LookupService) { }

  ngOnInit() {
    this.schoolYears = this.lookup.getServiceYears();
    this.programTypes = this.lookup.getProgramTypes();
    this.careerTech.Clusters().subscribe(data => {
      this.clusters = data['data'];
    });

    this.availableCourses = this.courseService.getCoursesApi();

    this.careerTech.Programs().subscribe(data => {
      this.data = new DataSource({
        store: new ArrayStore({
          data: data,
          key: 'id'
        }), group: 'clusterName'
      });

    });
  }

  onSelectionChanged(program) {
    if (program == null) {
      this.courses = [];
      this.program = null;
      this.selectedProgram = null;
      return;
    }

    this.selectedProgram = program;
    this.careerTech.ProgramEdit(program.programCode)
      .subscribe(data => {
        this.program = data;
      });

    this.careerTech.ProgramCourses(program.programCode).subscribe(data => {
      this.courses = data;
    });
  }

  onSubmit(formValues) {
    this.careerTech.SaveProgram(this.program).subscribe((data) => {
    });
  }

  addCourses(list) {
    list.selectedItems.forEach(item => {
      this.careerTech.AddProgramCourse(this.selectedProgram, item).subscribe(
        () => {
          this.courses.push(item);
        });
    });
    list.selectedItems = [];
  }

  removeCourses(list) {
    list.selectedItems.forEach(item => {
      this.careerTech.RemoveProgramCourse(this.selectedProgram, item).subscribe(
        () => {
          const idx = this.courses.findIndex(x => x === item);
          this.courses.splice(idx, 1);
        },
        (error) => {
          console.error('error', error);
        }
      );
    });
    list.selectedItems = [];
  }
}
