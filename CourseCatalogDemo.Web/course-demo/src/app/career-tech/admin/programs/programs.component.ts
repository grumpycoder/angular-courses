import { Component, OnInit, OnDestroy } from '@angular/core';
import { CareerTechService } from 'src/app/shared/career-tech.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { ICourse } from 'src/app/models/course';
import { IProgram, IProgramEdit, ICredential } from 'src/app/models/program';
import { LookupService } from 'src/app/shared/lookup.service';
import { CourseService } from 'src/app/shared/course.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styles: []
})
export class ProgramsComponent implements OnInit, OnDestroy {
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
  availableCredentials: ICredential[];

  private subscription: Subscription;

  constructor(
    private careerTech: CareerTechService,
    private courseService: CourseService,
    private lookup: LookupService) { }

  ngOnInit() {
    this.schoolYears = this.lookup.getServiceYears();
    this.programTypes = this.lookup.getProgramTypes();
    this.subscription = this.careerTech.Clusters().subscribe(data => {
      this.clusters = data['data'];
    });
    this.subscription = this.careerTech.Credentials().subscribe(data => {
      this.availableCredentials = data;
    });

    this.availableCourses = this.courseService.getCoursesApi();

    this.subscription = this.careerTech.Programs().subscribe(data => {
      this.data = new DataSource({
        store: new ArrayStore({
          data: data,
          key: 'id'
        }), group: 'clusterName'
      });

    });


  }

  ngOnDestroy() {
    console.log('destroying subscriptions');

    this.subscription.unsubscribe();
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

  addCredential(list) {
    list.selectedItems.forEach(item => {
      this.careerTech.AddProgramCredential(this.selectedProgram, item).subscribe(
        () => {
          console.log('add', item);
          this.selectedProgram.credentials.push(item);
        });
    });
    list.selectedItems = [];
  }

  removeCredential(list) {
    list.selectedItems.forEach(item => {
      this.careerTech.RemoveProgramCredential(this.selectedProgram, item).subscribe(
        () => {
          const idx = this.selectedProgram.credentials.findIndex(x => x === item);
          this.selectedProgram.credentials.splice(idx, 1);
        },
        (error) => {
          console.error('error', error);
        }
      );
    });
    list.selectedItems = [];
  }
}
