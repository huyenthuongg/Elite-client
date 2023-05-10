import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent} from './components/homepage/homepage.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { ShopByFabricComponent } from './components/shop-by-fabric/shop-by-fabric.component';
import { ShopByColorComponent } from './components/shop-by-color/shop-by-color.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
const routes: Routes = [
  {path:"home", component: HomepageComponent},
  {path: "story", component: OurStoryComponent},
  {path: "shopbyfabric", component: ShopByFabricComponent},
  {path:"cart", component: CartComponent},
  {path:"payment", component: PaymentComponent},
  {path: "shopbycolor", component: ShopByColorComponent},
  {path: "promotions", component: PromotionComponent},
  {path: "viewproductdetail", component: ProductDetailComponent},
  {path:"shopbycolor/:id", component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
