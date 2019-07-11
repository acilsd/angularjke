import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';

import { DirectivesModule } from './directives/directives.module';

import { ShoppingListService } from './shopping-list/services/shopping-list/shopping-list.service';
import { RecipeService } from './recipe-book/services/recipes/recipe.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, DirectivesModule],
  bootstrap: [AppComponent],
  providers: [ShoppingListService, RecipeService]
})
export class AppModule {}
