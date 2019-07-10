import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appStatus = new Promise((res, rej) => {
    setTimeout(() => {
      res('app is stable');
    }, 2000);
  });

  public hardcodedData = [
    {
      type: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date()
    },
    {
      type: 'small',
      name: 'User very long server name',
      status: 'offline',
      started: new Date()
    },
    {
      type: 'large',
      name: 'Test server',
      status: 'stable',
      started: new Date()
    },
    {
      type: 'medium',
      name: 'I dont know something',
      status: 'critical',
      started: new Date()
    },
    {
      type: 'small',
      name: 'Development server',
      status: 'offline',
      started: new Date()
    }
  ];

  public filteredStatus = '';

  public getStatusClasses(server: any) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
