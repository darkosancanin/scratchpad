import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private socket: SocketIOClient.Socket;

  join(username: String): Observable<ChatServiceMessage>{
    this.socket = io();
    let observable = new Observable(observer => {
      this.socket.on('users', data => {
        observer.next(new ChatServiceMessage('users', data));
      });
      this.socket.on('message', data => {
        observer.next(new ChatServiceMessage('message', data));
      });
      return () => {
        if(this.socket.connected){
          this.socket.close();
        }
      };
    });
    this.socket.emit('join', username);
    return observable;
  }

  sendMessage(username: String, text: String){
    this.socket.emit('message', { username: username, text: text });
  }
}

export class ChatServiceMessage{
  constructor(public event: String, public data: any){}
}
