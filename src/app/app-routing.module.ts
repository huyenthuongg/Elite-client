import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent} from './components/homepage/homepage.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { ShopByFabricComponent } from './components/shop-by-fabric/shop-by-fabric.component';
import { CartComponent } from './components/cart/cart.component';
const routes: Routes = [
  {path:"home", component: HomepageComponent},
  {path: "story", component: OurStoryComponent},
  {path: "shopbyfabric", component: ShopByFabricComponent},
  {path:"cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
