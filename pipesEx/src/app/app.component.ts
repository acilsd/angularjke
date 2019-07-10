import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hardcodedData = [
    {
      type: 'medium',
      name: 'Prod',
      status: 'stable',
      started: new Date(15, 6, 2019)
    },
    {
      type: 'small',
      name: 'User',
      status: 'offline',
      started: new Date(14, 6, 2019)
    },
    {
      type: 'large',
      name: 'Test',
      status: 'stable',
      started: new Date(13, 6, 2019)
    },
    {
      type: 'medium',
      name: 'CI',
      status: 'critical',
      started: new Date(12, 6, 2019)
    },
    {
      type: 'small',
      name: 'Dev',
      status: 'offline',
      started: new Date(11, 6, 2019)
    }
  ];

  public getStatusClasses(server: any) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
