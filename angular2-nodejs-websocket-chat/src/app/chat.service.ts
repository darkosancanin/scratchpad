import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private socket: SocketIOClient.Socket;

  constructor() {
  }

  join(username: String){
    this.socket = io();
    this.socket.emit('join', username);
  }

  disconnect(){
    this.socket.disconnect();
  }

  sendMessage(username: String, text: String){
    this.socket.emit('message', { username: username, text: text });
  }

  getUsers(){
    let observable = new Observable(observer => {
      this.socket.on('users-updated', data => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    
    return observable;
  }

  getMessages(){
    let observable = new Observable(observer => {
      this.socket.on('message', data => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    
    return observable;
  }
}
