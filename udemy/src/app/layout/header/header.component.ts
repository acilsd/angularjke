import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IRecipe } from 'src/app/recipe-book/models/recipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dService: DataService) {}

  ngOnInit() {}

  onSave() {
    this.dService.onSave().subscribe((res: IRecipe[]) => {
      console.log('response: ', res);
    });
  }

  onFetch() {
    this.dService.onFetch();
  }
}
