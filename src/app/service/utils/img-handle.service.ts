import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgHandleService {

  constructor() { }
  
  loadImage(type:string, data:any){
    return data.find(function(o:any){ return o.name==type });
 }
}
