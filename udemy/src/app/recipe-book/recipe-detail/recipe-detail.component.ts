import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  item: IRecipe;

  constructor(
    private recipeService: RecipeService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe((p: Params) => {
      this.item = this.recipeService.getSelectedRecipe(Number(p.id));
    });
  }

  addToShopList() {
    this.recipeService.addToShopList(this.item.ingredients);
  }
}
