import { HttpClient, HttpErrorResponse, HttpHeaders } from'@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Slider } from '../model/slider';
@Injectable({
  providedIn: 'root'
})
export class SliderService { 

  constructor(private _http: HttpClient) { }
  getSlider():Observable<any>
  {
  
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
  
  const requestOptions:Object={
  headers:headers,
  responseType:"text"
  }
  return this._http.get<any>("/slider",requestOptions).pipe(
  map(res=>JSON.parse(res) as Array<Slider>),
  retry(3),
  catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }
}
 