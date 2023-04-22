import { Component } from '@angular/core';
import { HomepageAPIService } from './service/homepage-api.service';
import { ImgHandleService } from './service/utils/img-handle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homepage1:any;
  errMessage:string=''
  constructor(public _service: HomepageAPIService, public handleImg: ImgHandleService){
  this._service.getHomepage().subscribe({
  next:(data)=>{
   this.homepage1= handleImg.loadImage("Top Message", data);
  },
  error:(err)=>{this.errMessage=err}
  })
  }
}

 