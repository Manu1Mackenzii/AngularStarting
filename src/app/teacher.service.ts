import { Injectable } from '@angular/core';
import { Teacher } from './teachers/teacher';
import { TEACHERS } from './teachers/mock-teachers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teachersUrl = 'api/teachers';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    
    ) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('TeacherService: ${message}');
  }

 

  // getTeachers(): Observable<Teacher[]> {
  //   const teachers = of(TEACHERS);
  //   this.messageService.add('TeacherService: fetched teachers');
  //   return teachers;
  // }
  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teachersUrl)
    .pipe(
      tap(_ => this.log('fetched teachers')),
      catchError(this.handleError<Teacher[]>('getTeachers', []))
    );
  }

 

/** GET hero by id. Will 404 if id not found */
getTeacher(id: number): Observable<Teacher> {
  const url = `${this.teachersUrl}/${id}`;
  return this.http.get<Teacher>(url).pipe(
    tap(_ => this.log(`fetched teacher id=${id}`)),
    catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
  );
}

/** POST: add a new hero to the server */
addTeacher(teacher: Teacher): Observable<Teacher> {
  return this.http.post<Teacher>(this.teachersUrl, teacher, this.httpOptions).pipe(
    tap((newTeacher: Teacher) => this.log(`added teacher w/ id=${newTeacher.id}`)),
    catchError(this.handleError<Teacher>('addTeacher'))
  );
}
updateTeacher(teacher: Teacher): Observable<any> {
  return this.http.put(this.teachersUrl, teacher, this.httpOptions).pipe(
    tap(_ => this.log(`updated teacher id=${teacher.id}`)),
    catchError(this.handleError<any>('updateTeacher'))
  );
}

deleteTeacher(id: number): Observable<Teacher> {
  const url = `${this.teachersUrl}/${id}`;

  return this.http.delete<Teacher>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted teacher id=${id}`)),
    catchError(this.handleError<Teacher>('deleteTeacher'))
  );
}

  // getTeacher(id: number): Observable<Teacher> {
  //   const teacher = TEACHERS.find(t => t.id === id)!;;
  //   this.messageService.add('TeacherService: fetched teachers id=${id}');
  //   return of (teacher);
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 

}
