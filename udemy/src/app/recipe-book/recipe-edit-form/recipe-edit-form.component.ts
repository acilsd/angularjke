import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IRecipe, Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipes/recipe.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styleUrls: ['./recipe-edit-form.component.scss']
})
export class RecipeEditFormComponent implements OnInit {
  public recipe: IRecipe;
  public rcForm: FormGroup;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
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
    this.instEditValues();
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
      this.recipe.id,
      name,
      descr,
      imgPath,
      ingredients
    );
    this.recipeService.editRecipe(newRecipe);
    this.handleRedirect();
  }

  onDeleteIngr(idx: number) {
    this.ingrList.removeAt(idx);
  }

  handleRedirect() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
