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
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailComponent } from './course-admin/course-detail/course-detail.component';
import { FormsModule } from '@angular/forms';
import { CourseModule } from './courses/course.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxListModule,
    CourseModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    CourseCatalogComponent,
    CourseAdminComponent,
    CourseDetailComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
