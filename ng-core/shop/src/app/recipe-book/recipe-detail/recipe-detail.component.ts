import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() item: IRecipe;

  constructor(private service: RecipeService) {}

  ngOnInit() {}

  addToShopList() {
    this.service.addToShopList(this.item.ingredients);
  }
}
