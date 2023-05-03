import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Review } from '../model/review';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {
  //review
  constructor(private _http: HttpClient) {}
  getReviews(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/review', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Review>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
  getReview(ReviewID: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/review/' + ReviewID, requestOptions).pipe(
      map((res) => JSON.parse(res) as Review),
      retry(3),
      catchError(this.handleError)
    );
  }
  //update
  putReview(aReview: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/product', JSON.stringify(aReview), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Review>),
        retry(3),
        catchError(this.handleError)
      );
  }
  //create
  postReview(aReview: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/product', JSON.stringify(aReview), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Review>),
        retry(3),
        catchError(this.handleError)
      );
  }
  //question
  getQuestions(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/question', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Question>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getQuestion(QuestionID: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/question/' + QuestionID, requestOptions).pipe(
      map((res) => JSON.parse(res) as Question),
      retry(3),
      catchError(this.handleError)
    );
  }
  //update
  putQuestion(aQuestion: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/question', JSON.stringify(aQuestion), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Question>),
        retry(3),
        catchError(this.handleError)
      );
  }
  //create
  postQuestion(aQuestion: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/question', JSON.stringify(aQuestion), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Question>),
        retry(3),
        catchError(this.handleError)
      );
  }
}
