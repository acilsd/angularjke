import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipe-book/recipe-book.module').then(c => c.RecipeBookModule)
  },
  {
    path: 'shoplist',
    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then(
        c => c.ShoppingListModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
