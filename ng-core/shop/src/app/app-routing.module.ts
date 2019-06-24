import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';

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
  { path: 'shoplist', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
