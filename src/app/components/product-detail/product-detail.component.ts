import { Component,OnInit, Input, TemplateRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { optionShip } from 'src/app/model/productdetail';
import { Comment } from '@angular/compiler';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  {

  options: optionShip[] = [
    { value: 'option1', text: 'Made To Order' },
    { value: 'option2', text: 'Ready To Ship' },
    { value: 'option3', text: 'Home Try-On' }
  ];

  @Input() value: number = 0;
  @Input() min: number = -Infinity;
  @Input() max: number = Infinity;

  increment() {
    if (this.value < this.max) {
      this.value++;
    }
  }
  decrement(): void {
    if (this.value > this.min) {
      this.value--;
    }
  }
  public showQuestion: boolean = false;
  // selectedOption: any;
  // selectedValue!: any;
  // selectedText!: any;
  // onSelect(option: optionShip): void {
  //   this.selectedValue = option.value;
  //   this.selectedText = option.text;
  // }
  showQuestion1(){
    this.showQuestion = !this.showQuestion
}
}
