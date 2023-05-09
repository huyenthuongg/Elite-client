import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OurStoryComponent } from './components/our-story/our-story.component';
import { ShopByFabricComponent } from './components/shop-by-fabric/shop-by-fabric.component';
import { BlogComponent } from './components/blog/blog.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { DetailBlogComponent } from './components/detail-blog/detail-blog.component';
import { ProductDetailComponent } from "./components/product-detail/ProductDetailComponent";
import { SizechartComponent } from './components/sizechart/sizechart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

    LoginpageComponent,
    RegisterpageComponent,
    ForgotpasswordComponent,

    OurStoryComponent,
    ShopByFabricComponent,
    SizechartComponent,
    ProductDetailComponent,
    DetailBlogComponent,
    MyProfileComponent,
    BlogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
