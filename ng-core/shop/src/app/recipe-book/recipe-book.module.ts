import { NgModule } from '@angular/core';
import { RecipeBookRoutingModule } from './recipe-book-routing,module';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [RecipeBookRoutingModule, CommonModule, DirectivesModule],
  bootstrap: [RecipeBookComponent]
})
export class RecipeBookModule {}
