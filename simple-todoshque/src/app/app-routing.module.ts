import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { RouterTestComponent } from './components/Pages/router-test/router-test.component';
import { RouterTestDaComponent } from './components/Pages/router-test-da/router-test-da.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'soglasny', component: RouterTestComponent },
  { path: 'uznali', component: RouterTestDaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
