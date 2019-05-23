import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RouterModule, Routes } from '@angular/router';
import {
  DxButtonModule,
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
  DxListModule
} from 'devextreme-angular';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseProgramComponent } from './course-program/course-program.component';

const routes: Routes = [

  { path: '', component: CourseListComponent },
  {
    path: ':id', component: CourseDetailComponent,
    children: [
      { path: '', component: CourseInfoComponent },
      { path: 'info', component: CourseInfoComponent },
      { path: 'programs', component: CourseProgramComponent }
    ]
  },
  { path: ':id/edit', component: CourseEditComponent }
];

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    CourseEditComponent,
    CourseInfoComponent,
    CourseProgramComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxListModule
  ]
})
export class CourseModule { }
