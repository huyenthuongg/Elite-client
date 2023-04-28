import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './components/blog/blog.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { DetailBlogComponent } from './components/detail-blog/detail-blog.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SizechartComponent } from './components/sizechart/sizechart.component';
import { AlertModule } from 'ngx-bootstrap/alert';
@NgModule({
  declarations: [
    AppComponent,SizechartComponent,ProductDetailComponent,DetailBlogComponent,MyProfileComponent,BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  exports:[AlertModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
