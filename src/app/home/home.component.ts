import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment'; // 在environments設定

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  envServer;

  constructor() { }

  ngOnInit() {
    this.envServer = environment.server;
  }

}
