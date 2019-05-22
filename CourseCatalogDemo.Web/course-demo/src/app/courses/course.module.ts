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
import { CourseResolver } from './course-resolver.service';

@NgModule({
  declarations: [CourseListComponent, CourseEditInfoComponent, CourseEditComponent, CourseEditProgramComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'courses', component: CourseListComponent },
      {
        path: 'courses/:id/edit', component: CourseEditComponent, resolve: { resolvedData: CourseResolver },
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: CourseEditInfoComponent },
          { path: 'programs', component: CourseEditProgramComponent }
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
