import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';

import { ShoppingListComponent } from '../shopping-list/shopping-list/shopping-list.component';
import { ListEditFormComponent } from '../shopping-list/list-edit-form/list-edit-form.component';

import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [ShoppingListComponent, ListEditFormComponent],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    ShoppingListRoutingModule,
    CommonModule,
    DirectivesModule
  ],
  bootstrap: [ShoppingListComponent]
})
export class ShoppingListModule {}
