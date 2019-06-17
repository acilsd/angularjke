import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: IRecipe;

  constructor(private service: RecipeService) {}

  ngOnInit() {}

  onSelected(e: Event) {
    e.preventDefault();
    this.service.selected.emit(this.recipe);
  }
}
