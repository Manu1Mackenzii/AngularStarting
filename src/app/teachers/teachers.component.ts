import { Component } from '@angular/core';
import { Teacher } from './teacher';
import { TEACHERS } from './mock-teachers';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  
  /* teacher : Teacher = {
    id: 1,
    name: 'Windstorm'
  };  */

  teachers = TEACHERS;
  
  selectedTeacher?: Teacher;
onSelect(teacher : Teacher): void {
  this.selectedTeacher = this.selectedTeacher === teacher ? undefined : teacher;
}

}
