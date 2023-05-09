import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductDetailComponent } from "./components/product-detail/ProductDetailComponent";
import { OurStory } from './model/ourstory';
import { ShopByFabricComponent } from './components/shop-by-fabric/shop-by-fabric.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'product-view/:id', component: ProductDetailComponent },
  { path: 'product-view', component: ProductDetailComponent },
  { path: 'color', component: ProductDetailComponent },
  { path: 'fabric', component: ProductDetailComponent },
  {path: "story", component: OurStory},
  {path:"shopfabric", component: ShopByFabricComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
