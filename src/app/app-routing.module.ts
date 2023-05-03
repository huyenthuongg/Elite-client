import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OurStory } from './model/ourstory';
import { ShopByFabricComponent } from './components/shop-by-fabric/shop-by-fabric.component';

const routes: Routes = [
  {path:"home", component: HomepageComponent},
  {path: "story", component: OurStory},
  {path:"shopfabric", component: ShopByFabricComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
