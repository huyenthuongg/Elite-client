import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Fabric } from '../model/fabric';

@Injectable({
  providedIn: 'root',
})
export class FabricService {
  //Xem phân loại sản phẩm theo fabric
  constructor(private _http: HttpClient) {}
  getFabrics(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/fabric', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Fabric>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
  getFabric(FabricID: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .get<any>('/fabric/' + FabricID, requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Fabric),
        retry(3),
        catchError(this.handleError)
      );
  }
  //update
  putFabric(aFabric: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/fabric', JSON.stringify(aFabric), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Fabric>),
        retry(3),
        catchError(this.handleError)
      );
  }
  //create
  postFabric(aFabric: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/fabric', JSON.stringify(aFabric), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Fabric>),
        retry(3),
        catchError(this.handleError)
      );
  }
}
