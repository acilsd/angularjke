import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';

import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ListEditFormComponent } from './shopping-list/list-edit-form/list-edit-form.component';
import { ListItemComponent } from './shopping-list/list-item/list-item.component';

import { ShoppingListService } from './shopping-list/services/shopping-list/shopping-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeBookModule } from './recipe-book/recipe-book.module';
import { RecipeBookRoutingModule } from './recipe-book/recipe-book-routing.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ListEditFormComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeBookRoutingModule,
    BrowserAnimationsModule,
    RecipeBookModule,
    DirectivesModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
