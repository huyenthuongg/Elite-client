import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path:"", component: LoginpageComponent},
  {path:'forgotpassword', component: ForgotpasswordComponent},
  {path:'register', component: RegisterpageComponent},
  {path:'login', component: LoginpageComponent},
  {path:'home', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
