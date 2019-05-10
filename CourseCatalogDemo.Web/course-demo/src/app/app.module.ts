import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { CourseAdminComponent } from './course-admin/course-admin.component';
import {
  DxButtonModule,
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
  DxListModule
} from 'devextreme-angular';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxListModule
  ],
  declarations: [AppComponent, NavBarComponent, CourseCatalogComponent, CourseAdminComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
