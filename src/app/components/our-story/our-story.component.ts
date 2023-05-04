import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent {
  ourstory:any;
  errMessage:string=''
  constructor(public _service: ProductServiceService){
  this._service.getOurStory().subscribe({
  next:(data)=>{this.ourstory=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}
