import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IRecipe, Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

const uuid = () =>
  'recipe_' +
  Math.random()
    .toString(36)
    .substr(2, 9);

@Component({
  selector: 'app-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.scss']
})
export class RecipeAddFormComponent implements OnInit {
  public recipe: IRecipe;
  public rcForm: FormGroup;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.rcForm = this.fb.group({
      name: ['', [Validators.required]],
      descr: ['', [Validators.required]],
      imgPath: ['', [Validators.required]],
      ingredients: this.fb.array([])
    });
  }

  get ingrList() {
    return this.rcForm.get('ingredients') as FormArray;
  }

  public onAddIngr() {
    this.ingrList.push(
      this.fb.group({
        name: ['', [Validators.required]],
        amount: [null, [Validators.required, Validators.min(1)]]
      })
    );
  }

  onSubmit() {
    const { name, descr, imgPath, ingredients } = this.rcForm.value;
    const newRecipe = new Recipe(uuid(), name, descr, imgPath, ingredients);
    this.recipeService.addRecipe(newRecipe);
    this.handleRedirect();
  }

  handleRedirect() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
