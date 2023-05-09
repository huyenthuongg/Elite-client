import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';
import { Users } from 'src/app/model/Users';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  constructor(private router: Router, private _userService: UsersService) {}

  user = new Users();
  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  forgotpasswordpage() {
    this.router.navigate(['/forgotpassword']);
  }
  registerpage() {
    this.router.navigate(['/register']);
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Hàm kiểm tra độ dài mật khẩu
  isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

  userModel: string = '';

  // login() {
  //   if (this.user.email === "" || this.user.password === "") {
  //     alert('Email or password cannot be blank');
  //   } else {
  //     this._userService.getUsers().subscribe((data) => {
  //       data.forEach((element: any) => {
  //         if (
  //           element.email == this.user.email &&
  //           element.password == this.user.password
  //         ) {
  //           this.userModel = element;
  //           alert('Login successfully');
  //           this.router.navigate(['/home']);
  //         }
  //       });
  //       if (this.userModel == '') {
  //         alert('Email or password is incorrect');
  //       }
  //     }
  //     );
  //   }
  // }

  login() {
    this._userService.login(this.user).subscribe({
      next: (data) => {
        this.user = data;
        console.log(this.user);
        alert('Login successfully');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.userModel = err;
      },
    });
  }
}

// }
// function isValidPassword(password: any) {
// throw new Error('Function not implemented.');
