import { HttpClient, HttpErrorResponse, HttpHeaders } from'@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Product} from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

//View product
constructor(private _http: HttpClient) {}
getProduct(): Observable<any> {
  const headers = new HttpHeaders().set(
    'Content-Type',
    'text/plain;charset=utf-8'
  );
  const requestOptions: Object = {
    headers: headers,
    responseType: 'text',
  };
  return this._http.get<any>('/product', requestOptions).pipe(
    map((res) => JSON.parse(res) as Array<Product>),
    retry(3),
    catchError(this.handleError)
  );
}
handleError(error: HttpErrorResponse) {
  return throwError(() => new Error(error.message));
}

//TEST
getProductDetail(ProductID:string):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.get<any>("/product/"+ProductID,requestOptions).pipe(
map(res=>JSON.parse(res) as Product),
retry(3),
catchError(this.handleError))
}

// Update
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
