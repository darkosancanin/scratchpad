import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;

  constructor(private userInfoService: UserInfoService, private router: Router) {
  }

  ngOnInit() {
  }

  enter(){
    if(this.username){
      this.userInfoService.setUsername(this.username);
      this.router.navigate(['/chat']);
    }
  }
}
