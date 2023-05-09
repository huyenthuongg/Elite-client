import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { ShopByFabricComponent } from './components/shop-by-fabric/shop-by-fabric.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './components/payment/payment.component';
import { ShopByColorComponent } from './components/shop-by-color/shop-by-color.component';
import { PromotionComponent } from './components/promotion/promotion.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OurStoryComponent,
    ShopByFabricComponent,
    CartComponent,
    PaymentComponent,
    ShopByColorComponent,
    PromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
