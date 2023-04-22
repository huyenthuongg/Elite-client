import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OurstoryComponent } from './components/ourstory/ourstory.component';

const routes: Routes = [
 {path:"homepage", component:HomepageComponent},
 {path:"ourstory", component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
