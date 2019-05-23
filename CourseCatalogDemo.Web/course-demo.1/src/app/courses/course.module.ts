import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { RouterModule, Routes } from '@angular/router';
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
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseDetailInfoComponent } from './course-detail/course-detail-info.component';
import { CourseDetailProgramComponent } from './course-detail/course-detail-program.component';
import { CourseEditResolver } from './course-edit-resolver.service';

const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'courses', component: CourseListComponent },
  {
    path: 'courses/:id', component: CourseDetailComponent, resolve: { resolvedData: CourseResolver },
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: CourseDetailInfoComponent },
      { path: 'programs', component: CourseDetailProgramComponent }
    ]
  },
  {
    path: 'courses/:id/edit', component: CourseEditComponent, resolve: { resolvedData: CourseEditResolver },
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: CourseEditInfoComponent },
      { path: 'programs', component: CourseEditProgramComponent }
    ]
  },
  { path: '**', component: CourseListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxListModule
  ],
  declarations: [
    CourseListComponent,
    CourseEditInfoComponent,
    CourseEditComponent,
    CourseEditProgramComponent,
    CourseDetailComponent,
    CourseDetailInfoComponent,
    CourseDetailProgramComponent
  ]
})
export class CourseModule { }
