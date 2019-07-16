import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FilterService } from './services/filters/filter.service';
import { HttpService } from './services/http/http.service';
import { MovieService } from './services/movies/movie.service';

@NgModule({
  declarations: [AppComponent, SideBarComponent, TopBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FilterService, HttpService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
