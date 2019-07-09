import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IRecipe, Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { IIngredient } from 'src/app/shopping-list/models/ingredient';

const uuid = () =>
  'recipe_' +
  Math.random()
    .toString(36)
    .substr(2, 9);

@Component({
  selector: 'app-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styleUrls: ['./recipe-edit-form.component.scss']
})
export class RecipeEditFormComponent implements OnInit {
  public recipe: IRecipe;
  public editMode = false;
  public rcForm: FormGroup;

  constructor(
    private recipeService: RecipeService,
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      params.id ? (this.editMode = true) : (this.editMode = false);
      this.recipe = this.recipeService.getSelectedRecipe(params.id);
    });

    this.rcForm = this.fb.group({
      name: ['', [Validators.required]],
      descr: ['', [Validators.required]],
      imgPath: ['', [Validators.required]],
      ingredients: this.fb.array([
        this.fb.group({
          name: ['', [Validators.required]],
          amount: [null, [Validators.required, Validators.min(1)]]
        })
      ])
    });

    if (this.editMode) {
      this.instEditValues();
    }
  }

  private instEditValues() {
    this.rcForm.patchValue({
      name: this.recipe.name,
      descr: this.recipe.descr,
      imgPath: this.recipe.imgPath
    });

    const ingrFormArr = this.fb.array(
      this.recipe.ingredients.map(ingr =>
        this.fb.group({
          name: [ingr.name, [Validators.required]],
          amount: [ingr.amount, [Validators.required, Validators.min(1)]]
        })
      )
    );

    this.rcForm.setControl('ingredients', ingrFormArr);
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
    const newRecipe = new Recipe(
      this.recipe ? this.recipe.id : uuid(),
      name,
      descr,
      imgPath,
      ingredients
    );
    this.editMode
      ? this.recipeService.editRecipe(newRecipe)
      : this.recipeService.addRecipe(newRecipe);
  }
}
