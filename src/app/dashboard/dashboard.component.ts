import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teachers/teacher';
import { TeacherService } from '../teacher.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teachers : Teacher[] = []; 

  constructor(private teacherService: TeacherService) {}
  
  ngOnInit(): void {
    this.getTeachers();
  }


  getTeachers(): void {
    this.teacherService.getTeachers()
        .subscribe(teachers => this.teachers = teachers.slice(0, 10));
  }
  

}
