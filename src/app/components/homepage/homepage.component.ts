import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  homepage: any;
  fashions: any;
  errMessage: string = '';
  constructor(public _service: ProductServiceService) {
    this._service.getProducts().subscribe({
      next: (data) => {
        this.fashions = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}

