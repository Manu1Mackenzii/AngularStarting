import { Component , Input} from '@angular/core';
import { Teacher } from '../teachers/teacher';


@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent {
 
  @Input() teacher?: Teacher;

 
}

