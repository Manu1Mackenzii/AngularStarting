import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Teacher } from './teachers/teacher';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const teachers = [
     
        { id: 11, name: 'Emmanuella' },
        { id: 12, name: 'Dr. Nice' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr. IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    
     
    ];
    return {teachers};
  }

  genId(teachers: Teacher[]): number {
    return teachers.length > 0 ? Math.max(...teachers.map(teacher => teacher.id)) + 1 : 11;
  }


}
