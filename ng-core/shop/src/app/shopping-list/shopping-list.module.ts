import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

import { ShoppingListComponent } from '../shopping-list/shopping-list/shopping-list.component';
import { ListEditFormComponent } from '../shopping-list/list-edit-form/list-edit-form.component';
import { ListItemComponent } from '../shopping-list/list-item/list-item.component';

import { DirectivesModule } from '../directives/directives.module';
import { ShoppingListService } from './services/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ListEditFormComponent,
    ListItemComponent
  ],

  imports: [ShoppingListRoutingModule, CommonModule, DirectivesModule],
  bootstrap: [ShoppingListComponent],
  providers: [ShoppingListService]
})
export class ShoppingListModule {}
