import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { UserInfoService } from '../user-info.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerNavigate;

  beforeEach(async(() => {
    routerNavigate = jasmine.createSpy("navigate");
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ LoginComponent ],
      providers: [ 
        UserInfoService, 
        { provide: Router, useClass: class { navigate = routerNavigate; } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('enter', () => {
    it('should navigate to chat route', () => {
      component.username = "darko";
      component.enter();
      expect(routerNavigate).toHaveBeenCalledWith(['/chat']);
    });

    it('should not navigate away if username is not set', () => {
      component.enter();
      expect(routerNavigate).toHaveBeenCalledTimes(0);
    });
  });
});
