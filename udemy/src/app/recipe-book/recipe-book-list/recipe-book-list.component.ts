import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book-list.component.html',
  styleUrls: ['./recipe-book-list.component.scss']
})
export class RecipeBookListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
