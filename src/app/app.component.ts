import { Component } from '@angular/core';
import { UsersService } from './service/users.service';
import { Users } from './model/Users';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EliteProject';
  userAccounts: any;
  userAccount = new Users();
  userLogin:any;
  isLogin: boolean = false;

  constructor(
    private _userService: UsersService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.userLogin = this._userService.getUserLogin();

    this._userService.getUsers().subscribe({
      next: (data) => {
        this.userAccounts = data;
        for(let user of this.userAccounts){
          if(user._id == this.userLogin._id){
            this.userAccount = user;
            this.isLogin = true;
            break;
          }
        }
      },
      error: (err) => console.log(err)
    });
  }

  logOut(){
    const logoutConfirm = confirm('Are you sure to log out?');
    if(logoutConfirm){
      sessionStorage.removeItem('userLogin');
      this.isLogin = false;
      // this.router.navigate(['/login']);
      // window.location.reload();
    }
  }
}
