import { NgModule } from '@angular/core';
import { RecipeBookRoutingModule } from './recipe-book-routing,module';
import { RecipeBookComponent } from './recipe-book.component';
import { ShoppingListService } from '../shopping-list/services/shopping-list/shopping-list.service';
import { RecipeBookListComponent } from './recipe-book-list/recipe-book-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeBookListComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [RecipeBookRoutingModule, CommonModule],
  providers: [ShoppingListService],
  bootstrap: [RecipeBookComponent]
})
export class RecipeBookModule {}
