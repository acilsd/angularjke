import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ListComponent } from './shopping-list/list/list.component';
import { FormComponent } from './shopping-list/form/form.component';
import { ItemComponent } from './shopping-list/item/item.component';
import { DetailComponent } from './recipe-list/detail/detail.component';
import { RecipeComponent } from './recipe-list/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    FormComponent,
    ItemComponent,
    DetailComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
