import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { ProductDetailComponent } from "./components/product-detail/ProductDetailComponent";
import { OurStory } from './model/ourstory';
import { ShopByFabricComponent } from './components/shop-by-fabric/shop-by-fabric.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const routes: Routes = [
  {path:"", component: LoginpageComponent},
  {path:'forgotpassword', component: ForgotpasswordComponent},
  {path:'register', component: RegisterpageComponent},
  {path:'login', component: LoginpageComponent},
  {path:'home', component: HomepageComponent},
  { path: 'product-view/:id', component: ProductDetailComponent },
  { path: 'product-view', component: ProductDetailComponent },
  { path: 'color', component: ProductDetailComponent },
  { path: 'fabric', component: ProductDetailComponent },
  {path: "story", component: OurStory},
  {path:"shopfabric", component: ShopByFabricComponent},
  {path:"my-profile", component: MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
