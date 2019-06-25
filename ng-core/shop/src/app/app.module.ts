import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';

import { RecipeBookModule } from './recipe-book/recipe-book.module';
import { RecipeBookRoutingModule } from './recipe-book/recipe-book-routing.module';

import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListRoutingModule } from './shopping-list/shopping-list-routing.module';

import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeBookRoutingModule,
    ShoppingListRoutingModule,
    RecipeBookModule,
    ShoppingListModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
