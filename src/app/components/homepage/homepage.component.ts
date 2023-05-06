import { Component } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';
import { CrewService } from 'src/app/service/crew.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
slider:any;
crew: any; 
errMessage:string='' 
constructor(public _serviceSlider: SliderService, public _serviceCrew: CrewService){

this._serviceSlider.getSlider().subscribe({
  next:(data)=>{this.slider=data},
  error:(err)=>{this.errMessage=err}
  });

this._serviceCrew.getCrew().subscribe({
  next:(data)=>{this.crew=data},
  error:(err)=>{this.errMessage=err}
  })
}
}
