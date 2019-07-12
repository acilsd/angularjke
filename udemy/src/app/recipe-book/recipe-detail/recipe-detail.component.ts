import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  item: IRecipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((p: Params) => {
      this.item = this.recipeService.getSelectedRecipe(p.id);
    });
  }

  addToShopList() {
    this.recipeService.addToShopList(this.item.ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.item.id);
    this.router.navigate(['/']);
  }
}
