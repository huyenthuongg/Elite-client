import { HttpClient, HttpErrorResponse, HttpHeaders } from
'@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Slider } from '../model/slider';
@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() { }
}
