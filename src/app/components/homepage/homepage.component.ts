import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  homepage: any;
  fashion: any;
  errMessage: string = '';
  constructor(public _service: ProductServiceService) {
    this._service.getHomepage().subscribe({
      next: (data) => {
        this.homepage = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
