import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/Users';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent {
  userAccount = new Users();
  errMessage: string = '';
  constructor(private _service: UsersService, private router: Router) {}
  public setFashion(f: Users) {
    this.userAccount = f;
  }

  postUser() {
    this._service.postUser(this.userAccount).subscribe({
      next: (data) => {
        this.userAccount = data;
        console.log(this.userAccount);
        alert('Sign up successfully!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  loginpage(){
    this.router.navigate(['/login']);
  }
}
