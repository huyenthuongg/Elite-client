import { Component, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';
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
  selectedProduct: any;
  errMessage: string = '';
  id: string='';
  constructor(
    public activateRoute: ActivatedRoute,
    private _service: ProductServiceService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.activateRoute.paramMap.subscribe((params) => {
      let id = params.get('id');
      console.log(id);

      if (id != null) {
        this._service.getProduct(id).subscribe({
          next: (data) => {
            this.selectedProduct = data;
            console.log(data);
          },
          error: (err) => {
            this.errMessage = err;
          },
        });
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
