import { Component } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/model/Users';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {

  userAccounts: any;
  userAccount = new Users();
  userLogin:any;
  isLogin: boolean = false;
  errMessage: string = '';

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

  putUser(){
    this._userService.putUser(this.userAccount).subscribe({
      next:(data) => {this.userAccount =data, alert('Update successfully!')},
      error:(err) => {this.errMessage = err}
    })
  }


  items = [
    {
      name: 'My Profile',
    },
  ];
  showSubMenu = [
    {
      name: 'Edit Profile',
    },
  ];
  toggleSubMenu(item: any) {
    item.showSubMenu = !item.showSubMenu;
  }
  profilePicture: string = '/assets/myprofile/avatar.png';
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.profilePicture = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  public showEdit: boolean = true;
  showEditPR() {
    this.showEdit = true;
    this.showChangePW = false;
    this.showOrderHis = false;
    this.showReview = false;
  }
  public showChangePW: boolean = false;
  showChangePWPR() {
    this.showChangePW = true;
    this.showEdit = false;
    this.showOrderHis = false;
    this.showReview = false;
  }
  public showOrderHis: boolean = false;
  showOrderHistory() {
    this.showOrderHis = true;
    this.showChangePW = false;
    this.showEdit = false;
    this.showReview = false;
  }
  public showReview: boolean = false;
  showReviewOH() {
    this.showReview = true;
    this.showOrderHis = false;
    this.showChangePW = false;
    this.showEdit = false;
  }
}
