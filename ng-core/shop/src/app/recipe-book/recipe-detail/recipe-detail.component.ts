import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() item: IRecipe;
  constructor() { }

  ngOnInit() {
  }

}
