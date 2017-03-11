import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChatService } from '../chat.service'
import { UserInfoService } from '../user-info.service'

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private users;
  private messages: any[] = [];
  private messageText;

  constructor(private userInfoService: UserInfoService, private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.chatService.join(this.userInfoService.getUsername());
    this.chatService.getUsers().subscribe(users => {
      this.users = users;
    });
    this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

  sendMessage(){
    this.chatService.sendMessage(this.userInfoService.getUsername(), this.messageText);
    this.messageText = "";
  }

  logout(){
    this.userInfoService.logout();
    this.chatService.disconnect();
    this.router.navigate(['/']);
  }
}
