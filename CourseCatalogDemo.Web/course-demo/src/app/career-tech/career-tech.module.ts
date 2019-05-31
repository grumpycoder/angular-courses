import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramListComponent } from './program-list/program-list.component';
import { Routes, RouterModule } from '@angular/router';
import {
  DxSelectBoxModule,
  DxListModule,
  DxTextBoxModule,
  DxTemplateModule
} from 'devextreme-angular';
import { ClustersComponent } from './admin/clusters/clusters.component';
import { CareerTechAdminComponent } from './admin/career-tech-admin.component';
import { ProgramsComponent } from './admin/programs/programs.component';
import { CreditialsComponent } from './admin/creditials/creditials.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [

  { path: '', component: ProgramListComponent },
  {
    path: 'admin', component: CareerTechAdminComponent, children: [
      { path: 'clusters', component: ClustersComponent },
      { path: 'programs', component: ProgramsComponent },
      { path: 'creditials', component: CreditialsComponent },
      { path: '', redirectTo: 'clusters' },
    ]
  }
  //   path: '', component: CareerTechHomeComponent, children: [
  //     {
  //       path: 'admin', component: CareerTechAdminHomeComponent, children: [
  //         { path: 'clusters', component: ClustersComponent },
  //         { path: 'programs', component: ProgramsComponent }
  //       ]
  //     },
  //     // { path: 'programs', component: ProgramListComponent },
  //     // { path: 'clusters-admin', component: ClustersComponent },
  //     // { path: 'programs-admin', component: ProgramsComponent },
  //     // { path: 'creditials-admin', component: CreditialsComponent }
  //   ]
  // }

  // {
  //   path: 'career-tech', component: ProgramListComponent, children: [
  //     { path: 'programs', component: ProgramListComponent }
  //   ]
  // },
  // { path: 'programs', component: ProgramListComponent },
  // { path: 'career-tech', component: CareerTechAdminComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    DxSelectBoxModule,
    DxListModule,
    DxTextBoxModule,
    DxTemplateModule,
  ],
  declarations: [
    ProgramListComponent,
    ClustersComponent,
    CareerTechAdminComponent,
    ProgramsComponent,
    CreditialsComponent,
  ],
})
export class CareerTechModule { }
