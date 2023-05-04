import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Color } from '../model/color';
import { Fabric } from '../model/fabric';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private _http: HttpClient) {}
  getColors(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/color', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Color>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
  getColor(ColorID: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/color/' + ColorID, requestOptions).pipe(
      map((res) => JSON.parse(res) as Fabric),
      retry(3),
      catchError(this.handleError)
    );
  }
  //update
  putColor(aColor: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/color', JSON.stringify(aColor), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Fabric>),
        retry(3),
        catchError(this.handleError)
      );
  }
  //create
  postColor(aColor: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/color', JSON.stringify(aColor), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Color>),
        retry(3),
        catchError(this.handleError)
      );
  }
}
