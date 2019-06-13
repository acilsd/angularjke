import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  id = 10;
  status = 'offline';

  getStatus() {
    return this.status;
  }

  constructor() { }

  ngOnInit() {
  }

}
