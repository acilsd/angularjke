import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  canAdd = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test';

  constructor() {
    setTimeout(() => {
      this.canAdd = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created ${this.serverName}`;
  }

  // onUpdateServerName(e: Event) {
  //   this.serverName = (e.target as HTMLInputElement).value;
  // }
}
