import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramListComponent } from './program-list/program-list.component';
import { Routes, RouterModule } from '@angular/router';
import {
  DxSelectBoxModule,
  DxListModule
} from 'devextreme-angular';

const routes: Routes = [
  { path: '', component: ProgramListComponent },
  { path: 'career-tech', component: ProgramListComponent }
];

@NgModule({
  declarations: [ProgramListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxSelectBoxModule,
    DxListModule
  ]
})
export class CareerTechModule { }
