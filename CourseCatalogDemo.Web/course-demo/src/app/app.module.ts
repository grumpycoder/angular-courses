import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  DxButtonModule,
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
  DxListModule
} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './courses/course.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    // FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
