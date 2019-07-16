import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./components/movie-list/movie-list.module').then(
        m => m.MovieListModule
      )
  },
  {
    path: 'movies/:id',
    loadChildren: () =>
      import('./components/movie-item/movie-item.module').then(
        m => m.MovieItemModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
