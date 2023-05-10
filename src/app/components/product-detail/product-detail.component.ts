import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
}) 
export class ProductDetailComponent {
  @Input() value: number = 0;
  @Input() min: number = -Infinity;
  @Input() max: number = Infinity;
  product: any;
  errMessage: string = '';
  constructor(
    public activateRoute: ActivatedRoute,
    public _fs: ProductService,
    public router: Router,
    private _service: ProductService
    ) 
  {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id')
      if (id != null){
        this._service.getProductDetail(id).subscribe({
          next: (data) => {
            this.product = data;
          },
          error: (err) => {
            this.errMessage = err;
          },
        });
      }
    })
    }
  
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
  showQuestion1() {
    this.showQuestion = !this.showQuestion;
  }
}
