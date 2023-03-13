import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { AppSettings } from './settings';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${AppSettings.BASE_URL}/${AppSettings.USER_ENDPOINT}`).pipe(
      tap(_ => { 
        this.log('Successfully fetched Users');
        console.log(_)
    }),
      catchError(this.handleError<User[]>('getAllUsers', []))
    );
  }

  private log(message: string, severity: string = 'success') {
    this.messageService.add({ key: "msg", severity: severity, summary: message });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`, "error");
      return of(result as T);
    };
  }
}
