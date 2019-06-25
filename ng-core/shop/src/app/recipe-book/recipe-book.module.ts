import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeBookRoutingModule } from './recipe-book-routing.module';

import { RecipeBookListComponent } from './recipe-book-list/recipe-book-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    RecipeBookListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [RecipeBookRoutingModule, CommonModule, DirectivesModule],
  bootstrap: [RecipeBookListComponent]
})
export class RecipeBookModule {}
