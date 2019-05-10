import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { CourseAdminComponent } from './course-admin/course-admin.component';
import { CourseService } from './shared/course.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CourseCatalogComponent,
    CourseAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
