import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookRoutingModule } from './recipe-book-routing,module';
import { RecipeBookComponent } from './recipe-book.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingListService } from '../shopping-list/services/shopping-list/shopping-list.service';

@NgModule({
  declarations: [RecipeBookComponent],
  imports: [RecipeBookRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [RecipeBookComponent]
})
export class RecipeBookModule {}
