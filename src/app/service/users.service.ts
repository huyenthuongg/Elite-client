import { Injectable, ErrorHandler } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Users } from '../model/Users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }
  getUsers(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/users', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Users>),
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  getUser(userId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/users/' + userId, requestOptions).pipe(
      map((res) => JSON.parse(res) as Users),
      retry(3),
      catchError(this.handleError)
    );
  }

  postUser(user: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/users', JSON.stringify(user), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Users>),
        retry(3),
        catchError(this.handleError)
      );
  }
  login(user: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('users/login/', user, requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Users>),
        retry(3),
        catchError(this.handleError)
      );
  }
}
