import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';

import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ListEditFormComponent } from './shopping-list/list-edit-form/list-edit-form.component';
import { ListItemComponent } from './shopping-list/list-item/list-item.component';

import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { DropdownDirectiveDirective } from './directives/dropdown-directive.directive';
import { ShoppingListService } from './shopping-list/services/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ListEditFormComponent,
    ListItemComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    DropdownDirectiveDirective
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
