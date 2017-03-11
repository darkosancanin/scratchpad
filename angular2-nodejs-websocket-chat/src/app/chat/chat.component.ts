import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService, ChatServiceMessage } from '../chat.service'
import { UserInfoService } from '../user-info.service'
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private users: any[];
  private messages: any[] = [];
  private messageText: String;
  private connection: Subscription;

  constructor(private userInfoService: UserInfoService, private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.connection = this.chatService.join(this.userInfoService.getUsername())
      .subscribe((message: ChatServiceMessage) => {
        if(message.event === 'users'){
          this.users = message.data;
        }
        else if(message.event === 'message'){
          this.messages.push(message.data);
        }
      });
  }

  sendMessage(){
    this.chatService.sendMessage(this.userInfoService.getUsername(), this.messageText);
    this.messageText = "";
  }

  logout(){
    this.userInfoService.logout();  
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
