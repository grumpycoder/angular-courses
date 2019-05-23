import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'courses', component: CourseListComponent }
];

@NgModule({
  declarations: [CourseListComponent, CourseDetailComponent, CourseEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseModule { }
