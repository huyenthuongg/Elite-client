import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shop-by-fabric',
  templateUrl: './shop-by-fabric.component.html',
  styleUrls: ['./shop-by-fabric.component.css']
})
export class ShopByFabricComponent {
  product:any;
  errMessage:string='' 
  constructor(public _service: ProductService, private router: Router){
  this._service.getProduct().subscribe({
  next:(data)=>{this.product=data},
  error:(err)=>{this.errMessage=err}
  })
  };
  showDetailProduct(f:any){
    this.router.navigate(['shopbyfabric', f.ProductID])
  }
}
