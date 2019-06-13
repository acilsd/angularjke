import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  canAdd = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  servers: string[] = [];

  constructor() {
    setTimeout(() => {
      this.canAdd = true;
    }, 1000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created ${this.serverName}`;
  }

  // onUpdateServerName(e: Event) {
  //   this.serverName = (e.target as HTMLInputElement).value;
  // }
}
