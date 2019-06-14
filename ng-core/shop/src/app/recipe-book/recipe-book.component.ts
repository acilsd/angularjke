import { Component, OnInit } from '@angular/core';
import { IRecipe } from './models/recipe';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: IRecipe;

  constructor() { }

  ngOnInit() {
  }

}
