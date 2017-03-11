import { TestBed, inject } from '@angular/core/testing';

import { UserInfoService } from './user-info.service';

describe('UserInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInfoService]
    });
  });

  it('should ...', inject([UserInfoService], (service: UserInfoService) => {
    expect(service).toBeTruthy();
  }));

  describe('hasUsername', () => {
    it('should return false if it hasnt been set', inject([UserInfoService], (service: UserInfoService) => {
      service.logout();
      expect(service.hasUsername()).toBeFalsy();
    }));

    it('should return true if it has been set', inject([UserInfoService], (service: UserInfoService) => {
      service.logout();
      service.setUsername("darko");
      expect(service.hasUsername()).toBeTruthy();
    }));

    it('should return username', inject([UserInfoService], (service: UserInfoService) => {
      service.logout();
      service.setUsername("darko");
      expect(service.getUsername()).toEqual("darko");
    }));
  });
});
