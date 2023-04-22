import { HttpClient, HttpErrorResponse, HttpHeaders } from
'@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Homepage } from 'hompage';

@Injectable({
  providedIn: 'root'
})
export class HomepageAPIService {

  constructor(private _http: HttpClient) { }
  getHomepage():Observable<any>
  {
  
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
  
  const requestOptions:Object={
  headers:headers,
  responseType:"text"
  }
  return this._http.get<any>("/homepage",requestOptions).pipe(
  map(res=>JSON.parse(res) as Array<Homepage>),
  retry(3),
  catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }
}
