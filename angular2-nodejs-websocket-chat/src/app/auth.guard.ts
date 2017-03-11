import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { UserInfoService } from './user-info.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userInfoService: UserInfoService, private router: Router){}

  canActivate(): boolean {
    if(!this.userInfoService.hasUsername()){
      this.router.navigate(['/']);
    }
    
    return this.userInfoService.hasUsername();
  }
}
