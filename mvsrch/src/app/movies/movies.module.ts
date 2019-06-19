import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [MovieListComponent],
  imports: [CommonModule, MoviesRoutingModule]
})
export class MoviesModule {}
