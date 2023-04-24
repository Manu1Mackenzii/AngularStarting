import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import { FormsModule } from '@angular/forms';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
