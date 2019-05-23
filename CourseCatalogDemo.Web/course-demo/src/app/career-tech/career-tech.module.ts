import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramListComponent } from './program-list/program-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProgramListComponent },
  { path: 'career-tech', component: ProgramListComponent }
];

@NgModule({
  declarations: [ProgramListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CareerTechModule { }
