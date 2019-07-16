import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';

import { DirectivesModule } from './directives/directives.module';

import { ShoppingListService } from './shopping-list/services/shopping-list/shopping-list.service';
import { RecipeService } from './recipe-book/services/recipes/recipe.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [ShoppingListService, RecipeService, DataService]
})
export class AppModule {}
