import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserInfoService } from './user-info.service'

describe('AuthGuard', () => {
  let routerNavigate = jasmine.createSpy("navigate");

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard, 
        UserInfoService, 
        { provide: Router, useClass: class { navigate = routerNavigate; } }
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
