import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
items =[
  {
    name: "My Profile",
  }
];
showSubMenu = [
  {
    name: "Edit Profile"
  }
]
  toggleSubMenu(item: any) {
    item.showSubMenu = !item.showSubMenu;
  }
  profilePicture: string = '/assets/myprofile/avatar.png';
  onFileSelected(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.profilePicture = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  public showEdit : boolean= true;
  showEditPR(){
    this.showEdit=true;
    this.showChangePW=false;
    this.showOrderHis =false;
    this.showReview=false;
  }
  public showChangePW : boolean= false;
  showChangePWPR(){
    this.showChangePW=true;
    this.showEdit=false;
    this.showOrderHis =false;
    this.showReview=false;
  }
  public showOrderHis :boolean = false;
  showOrderHistory(){
    this.showOrderHis =true;
    this.showChangePW=false;
    this.showEdit=false;
    this.showReview=false;
  }
  public showReview :boolean=false;
  showReviewOH(){
    this.showReview=true;
    this.showOrderHis =false;
    this.showChangePW=false;
    this.showEdit=false;
  }
}
