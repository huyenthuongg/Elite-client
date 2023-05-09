import { Component } from '@angular/core';
import { FabricService } from 'src/app/service/fabric.service';
import { ProductServiceService } from 'src/app/service/product-service.service';
@Component({
  selector: 'app-shop-by-fabric',
  templateUrl: './shop-by-fabric.component.html',
  styleUrls: ['./shop-by-fabric.component.css'],
})
export class ShopByFabricComponent {
  fabrics: any;
  products: any;
  errMessage: string = '';
  constructor(public _service: FabricService, public _ser:  ProductServiceService) {
    this._service.getFabrics().subscribe({
      next: (data) => {
        this.fabrics = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this._ser.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
