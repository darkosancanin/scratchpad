import { Injectable } from '@angular/core';

@Injectable()
export class UserInfoService {
  private username: String = null;

  constructor() { }

  setUsername(username: String){
    sessionStorage['username'] = username;
  }

  getUsername():String{
    return sessionStorage['username'];
  }

  hasUsername():boolean{
    return this.getUsername() !== undefined;
  }

  logout(){
    sessionStorage.clear();
  }
}
