import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private socket;

  constructor(){
    // make test call to node server
    // this.http.get('/test')
    //   .map((res:Response) => res.json())
    //   .subscribe(res => {
    //     console.log(res);
    //   });
    
    // // create test socket.io connection
    // this.socket = io('/socket.io');
  }
}
