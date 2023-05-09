import { Component } from '@angular/core';
import { DetailBlogComponent } from '../detail-blog/detail-blog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private router: Router) {}
  showIRL: boolean = false;
  showIns: boolean = false;
  underlineIRL: boolean =false;
  underlineIns: boolean = false;


  showDivBlog(id:string) {
    if (id === 'ELITE IRL') {
      this.showIRL = true;
      this.underlineIRL=true;
      this.showIns = false;
      this.underlineIns = false;
    } else if (id === 'Inspiration') {
      this.showIRL = false;
      this.showIns = true;
      this.underlineIRL=false;
      this.underlineIns=true;
    }
  }
  goToDetailBlog() {
    this.router.navigate(['/detailblog']);
  }
}
