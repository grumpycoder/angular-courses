import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { CourseAdminComponent } from './course-admin/course-admin.component';
import { CourseListComponent } from './courses/course-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courseadmin', component: CourseAdminComponent },
  { path: 'courses', component: CourseListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
