import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ChatComponent } from './chat.component';

import { ChatService } from '../chat.service'
import { UserInfoService } from '../user-info.service'

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let routerNavigate = jasmine.createSpy("navigate");

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ChatComponent ],
      providers: [ 
        ChatService, 
        UserInfoService,
        { provide: Router, useClass: class { navigate = routerNavigate; } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
