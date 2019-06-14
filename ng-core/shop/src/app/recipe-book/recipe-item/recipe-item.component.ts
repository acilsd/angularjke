import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IRecipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: IRecipe;

  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(e: Event) {
    e.preventDefault();
    this.recipeSelected.emit();
  }
}
