import { Injectable } from '@angular/core';
import { Teacher } from './teachers/teacher';
import { TEACHERS } from './teachers/mock-teachers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private messageService: MessageService) { }

  

  getTeachers(): Observable<Teacher[]> {
    const teachers = of(TEACHERS);
    this.messageService.add('TeacherService: fetched teachers');
    return teachers;
  }

}
