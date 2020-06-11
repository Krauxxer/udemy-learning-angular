import { Component, OnInit } from '@angular/core';

@Component({
  selector    : 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls   : ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  allowResetServerName = false;
  serverCreationStatus = 'Server Was Not Created!';
  serverName: string = 'Initial Name';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServerCreate() {
    if (this.serverName.length > 0) {
      this.serverCreationStatus = 'Server Was Created! Server Name is: ' + this.serverName;
      this.allowResetServerName = true;
    } else {
      this.allowResetServerName = false;
    }
  }

  onResetServerName() {
    this.serverName = '';
    this.allowResetServerName = false;
  }

  onUpdateServerName(event: Event) {
    /*
      The red line under 'value' is from the IDE itself only,
      and it does not affect the execution. However, if we 
      would like to avoid that, then we can be explicit:

      this.serverName = (<HTMLInputElement>event.target).value;

      However, if we do not change it to the above, then we are 
      going to be getting log errors every time. Therefore, it
      is more convenient to update it to the explicit method.

      As a reference, the not explicit way is:

      However, if we use the o
    */
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
