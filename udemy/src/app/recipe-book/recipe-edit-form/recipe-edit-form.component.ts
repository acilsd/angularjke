import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IRecipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styleUrls: ['./recipe-edit-form.component.scss']
})
export class RecipeEditFormComponent implements OnInit {
  public recipe: IRecipe;
  public editMode = false;

  constructor(
    private recipeService: RecipeService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      params.id ? (this.editMode = true) : (this.editMode = false);
      this.recipe = this.recipeService.getSelectedRecipe(Number(params.id));

      console.log(this.editMode, this.recipe);
    });
  }
}
