import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic'
  },
  {
    path: 'basic',
    component: BasicFormComponent
  },
  {
    path: 'array',
    component: ArrayFormComponent
  },
  {
    path: 'nested',
    component: NestedFormComponent
  },
  {
    path: 'valid',
    component: ValidFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
