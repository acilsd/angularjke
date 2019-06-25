import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: '', component: RecipeBookComponent },
//   { path: 'shoplist', component: ShoppingListComponent },
// ];

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
