import { Component } from '@angular/core';
import { OurStoryService } from 'src/app/service/our-story.service';
@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent {
  ourstory:any;
  errMessage:string='' 
  constructor(public _service: OurStoryService){
  this._service.getStory().subscribe({
  next:(data)=>{this.ourstory=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}
