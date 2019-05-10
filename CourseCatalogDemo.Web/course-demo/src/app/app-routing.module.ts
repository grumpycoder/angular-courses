import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { CourseAdminComponent } from './course-admin/course-admin.component';

const routes: Routes = [
  { path: "", component: CourseCatalogComponent },
  { path: "courseadmin", component: CourseAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
