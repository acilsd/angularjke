import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IRecipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { IIngredient } from 'src/app/shopping-list/models/ingredient';

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
      // id
      name: '',
      descr: '',
      imgPath: '',
      ingredients: this.fb.array([
        this.fb.group({
          name: '',
          amount: ''
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
      imgPath: this.recipe.descr
    });

    const ingrFormArr = this.fb.array(
      this.recipe.ingredients.map(ingr => this.fb.group(ingr))
    );

    this.rcForm.setControl('ingredients', ingrFormArr);
  }

  get ingrList() {
    return this.rcForm.get('ingredients') as FormArray;
  }

  createIngr() {
    return this.fb.group({
      name: '',
      amount: ''
    });
  }

  onSubmit() {
    console.log(this.rcForm);
  }
}
