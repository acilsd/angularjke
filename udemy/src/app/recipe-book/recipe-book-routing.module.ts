import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookListComponent } from './recipe-book-list/recipe-book-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditFormComponent } from './recipe-edit-form/recipe-edit-form.component';
import { RecipeAddFormComponent } from './recipe-add-form/recipe-add-form.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeBookListComponent,
    children: [
      {
        path: 'new',
        component: RecipeAddFormComponent
      },
      { path: ':id', component: RecipeDetailComponent },
      {
        path: ':id/edit',
        component: RecipeEditFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeBookRoutingModule {}
