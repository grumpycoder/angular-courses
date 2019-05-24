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
import { CourseResolver } from './course-resolver.service';
import { CourseInfoEditComponent } from './course-info/course-info-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  { path: '', component: CourseListComponent },
  {
    path: ':id', component: CourseDetailComponent, resolve: { resolvedData: CourseResolver },
    children: [
      { path: '', component: CourseInfoComponent },
      { path: 'info', component: CourseInfoComponent },
      { path: 'programs', component: CourseProgramComponent }
    ]
  },
  {
    path: ':id/edit', component: CourseEditComponent,
    resolve: { resolvedData: CourseResolver },
    children: [
      { path: '', component: CourseInfoEditComponent },
      { path: 'info', component: CourseInfoEditComponent }
    ]
  }
];

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    CourseEditComponent,
    CourseInfoComponent,
    CourseProgramComponent,
    CourseInfoEditComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxListModule
  ]
})
export class CourseModule { }
