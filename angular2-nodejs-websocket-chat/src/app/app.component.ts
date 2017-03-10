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
  title = 'app works!';
  private socket;

  constructor(private http: Http){
    // make test call to node server
    this.http.get('/test')
      .map((res:Response) => res.json())
      .subscribe(res => {
        this.title = res.data;
        console.log(res);
      });
    
    // create test socket.io connection
    this.socket = io('/');
  }
}
