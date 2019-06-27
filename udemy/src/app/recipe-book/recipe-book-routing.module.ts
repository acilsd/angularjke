import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookListComponent } from './recipe-book-list/recipe-book-list.component';

const routes: Routes = [{ path: '', component: RecipeBookListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeBookRoutingModule {}
