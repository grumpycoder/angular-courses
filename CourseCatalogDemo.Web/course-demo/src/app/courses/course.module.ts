import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';
import {
  DxButtonModule,
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
  DxListModule
} from 'devextreme-angular';
import { CourseEditInfoComponent } from './course-edit/course-edit-info.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { SharedModule } from '../shared/shared.module';
import { CourseEditProgramComponent } from './course-edit/course-edit-program.component';

@NgModule({
  declarations: [CourseListComponent, CourseEditInfoComponent, CourseEditComponent, CourseEditProgramComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'courses', component: CourseListComponent },
      {
        path: 'courses/:id/edit', component: CourseEditComponent, children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: CourseEditInfoComponent }
        ]
      }
    ]),
    SharedModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxListModule
  ]
})
export class CourseModule { }
