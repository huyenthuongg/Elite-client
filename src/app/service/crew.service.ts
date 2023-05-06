import { HttpClient, HttpErrorResponse, HttpHeaders } from'@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Crew } from '../model/crew';
@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private _http: HttpClient) { }
  getCrew():Observable<any>
  {
  
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
  
  const requestOptions:Object={
  headers:headers,
  responseType:"text"
  }
  return this._http.get<any>("/crew",requestOptions).pipe(
  map(res=>JSON.parse(res) as Array<Crew>),
  retry(3),
  catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }
}
