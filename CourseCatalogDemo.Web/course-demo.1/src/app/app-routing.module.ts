import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './courses/course-list.component';
import { HomeComponent } from './home/home.component';
import { CourseModule } from './courses/course.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  //{ path: 'courses', loadChildren: () => CourseModule },
  { path: 'courses', component: CourseListComponent },
  { path: 'careertech', loadChildren: './career/career.module#CareerModule' },
  // { path: 'c', loadChildren: './courses/course.module#CourseModule' },
  //{ path: 'ct', loadChildren: () => CourseModule },
  // { path: 'c', loadChildren: './courses/course.module#CourseModule' },
  // {
  //   path: 'careertech',
  //   loadChildren: './career-tech/career-tech.module#CareerTechModule'
  // },
  // {
  //   path: 'ct', children: [
  //     { path: '', component: CareerTechHomeComponent },
  //     { path: 'cluster', component: ClusterComponent }
  //   ]
  // }
  // { path: 'careertech', component: CareerTechHomeComponent }
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
