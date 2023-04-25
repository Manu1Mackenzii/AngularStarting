import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers/teachers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'teachers', component: TeachersComponent },
  { path: 'detail/:id', component: TeacherDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { 
  
}
