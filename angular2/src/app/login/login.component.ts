import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginError: any;

  constructor(public angularFire: AngularFire, private router: Router) {
    this.angularFire.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/settings');
      }
    });
  }

  loginViaGoogle() {
    this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then((success) => {
        this.router.navigate(['/members']);
      }).catch((err) => {
        this.loginError = err;
      })
  }
}
