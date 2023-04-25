import { Component , Input} from '@angular/core';
import { Teacher } from '../teachers/teacher';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent {
 
  @Input() teacher?: Teacher;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTeachers();
  }
  

  getTeachers(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teacherService.getTeachers()
        .subscribe(teacher => this.teacher = teacher.find(teacher => teacher.id === id));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.teacher) {
      this.teacherService.updateTeacher(this.teacher)
        .subscribe(() => this.goBack());
    }
  }

}

