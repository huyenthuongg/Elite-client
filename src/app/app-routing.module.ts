import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBlogComponent } from './components/detail-blog/detail-blog.component';

const routes: Routes = [
  {path: 'detailblog',component:DetailBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
