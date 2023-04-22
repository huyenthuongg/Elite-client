import { Component } from '@angular/core';
import { HomepageAPIService } from 'src/app/service/homepage-api.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  homepage:any;
errMessage:string=''
constructor(public _service: HomepageAPIService){
this._service.getHomepage().subscribe({
next:(data)=>{this.homepage=data},
error:(err)=>{this.errMessage=err}
})
}
}
