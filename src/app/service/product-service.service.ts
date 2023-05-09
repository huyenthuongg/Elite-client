import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Product } from '../model/product';
import { Homepage } from '../model/homepage';
import { OurStory } from '../model/ourstory';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  //homepage
  getHomepage(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/homepage', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Homepage>),
      retry(3),
      catchError(this.handleError)
    );
  }
  //Our story
  getOurStory(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/ourstory', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<OurStory>),
      retry(3),
      catchError(this.handleError)
    );
  }
  //Xem chi tiết product
  constructor(private _http: HttpClient) {}
  getProducts(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/product', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<ProductServiceService>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
  getProduct(ProductID: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .get<any>('/productdetail/' + ProductID, requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Product),
        retry(3),
        catchError(this.handleError)
      );
  }
  //update
  putProduct(aProduct: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/product', JSON.stringify(aProduct), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Product>),
        retry(3),
        catchError(this.handleError)
      );
  }
  //create
  postProduct(aProduct: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/product', JSON.stringify(aProduct), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Product>),
        retry(3),
        catchError(this.handleError)
      );
  }
}
