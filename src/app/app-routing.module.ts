import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductDetailComponent } from "./components/product-detail/ProductDetailComponent";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'product-view/:id', component: ProductDetailComponent },
  { path: 'product-view', component: ProductDetailComponent },
  { path: 'color', component: ProductDetailComponent },
  { path: 'fabric', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
