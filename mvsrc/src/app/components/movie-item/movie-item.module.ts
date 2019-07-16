import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieItemComponent } from './movie-item/movie-item.component';

@NgModule({
  declarations: [MovieItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MovieItemComponent }])
  ]
})
export class MovieItemModule {}
