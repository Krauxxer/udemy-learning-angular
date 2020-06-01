import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = "offline";

  // Returns a string of the Server Status
  getServerStatus() {
    return this.serverStatus;
  }

  // Returns a number of the Server Id
  getServerId() {
    return this.serverId;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
  