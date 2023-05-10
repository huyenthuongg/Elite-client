import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { optionShip } from 'src/app/model/productdetail';
import { Comment } from '@angular/compiler';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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

  constructor(
    public activateRoute: ActivatedRoute,
    public _fs: ProductService,
    public router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');

      if (id != null) {
        this.product = _fs.getProductDetail(id);
        console.log(this.product.ProductName);
      }
    });
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
