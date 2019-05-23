import { Component, OnInit } from '@angular/core';
import { LookupService } from 'src/app/shared/lookup.service';
import { ActivatedRoute } from '@angular/router';
import { CareerTechService } from 'src/app/shared/career-tech.service';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-course-edit-program',
  templateUrl: './course-edit-program.component.html',
  styles: []
})
export class CourseEditProgramComponent implements OnInit {
  programs: { id: number; programCode: string; name: string; }[];
  course: any;
  selectedItems: [];
  private error: boolean;

  constructor(
    private route: ActivatedRoute,
    private lookup: LookupService,
    private careerTech: CareerTechService,
    private courseService: CourseService) { }

  ngOnInit() {
    this.programs = this.lookup.getPrograms();
    this.route.parent.data.subscribe(data => {
      this.course = data.resolvedData.course;
    });
  }

  addProgram(list): void {
    list.selectedItems.forEach(item => {
      console.log('call service to add program', item);
      this.careerTech.addProgramCourse(this.course, item).subscribe(
        () => {
          console.log('add course');
          this.course.careerTechPrograms.push(item);

        });
    });
    list.selectedItems = [];
  }

  onItemDeleting($event) {
    const program = $event.itemData;
    const e = $event;
    this.careerTech.removeProgramCourse(this.course, program).subscribe(
      () => {
        console.log(`${this.course.name} was removed`);
      },
      (error) => {
        console.log('delete error', error);
        error = true;
        $event.cancel = true;

      }, () => {
        console.log('request completed');
        console.log('error', this.error);
        // No errors, route to new page
      }
    );
    //  e.cancel = hasError;
    //console.log('error', this.error);

  }

  removeProgram(list) {
    console.log('remove');
    list.selectedItems.forEach(item => {
      this.careerTech.removeProgramCourse(this.course, item).subscribe(
        () => {
          console.log('removed');
          const idx = this.course.careerTechPrograms.findIndex(x => x === item);
          this.course.careerTechPrograms.splice(idx, 1);
        },
        (error) => {
          console.log('error', error);
        }
      );

    });

    list.selectedItems = [];
  }

  onRemoveComplete(message?: string): void {
    console.log('remove complete', message);

  }
}
