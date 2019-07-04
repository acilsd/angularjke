import { Component, OnInit, OnDestroy } from '@angular/core';
import { IIngredient } from '../models/ingredient';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IIngredient[];
  private subjSubscr: Subscription;

  constructor(private service: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.service.getIngredients;
    this.subjSubscr = this.service.emitDataChange.subscribe(
      (newList: IIngredient[]) => {
        this.ingredients = newList;
      }
    );
  }

  ngOnDestroy() {
    this.subjSubscr.unsubscribe();
  }
}
