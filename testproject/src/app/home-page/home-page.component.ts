import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users = [];
  searchStr = "";
  constructor(private userService: UserService){
  }
  ngOnInit() {
    //this.users = this.userService.users;
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
