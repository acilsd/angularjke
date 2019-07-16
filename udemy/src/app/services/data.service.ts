import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeService } from '../recipe-book/services/recipes/recipe.service';
import { IRecipe } from '../recipe-book/models/recipe';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_ROOT = 'https://recipe-pook.firebaseio.com/repices.json';

  constructor(private http: HttpClient, private rcService: RecipeService) {}

  onSave() {
    return this.http.put<IRecipe[]>(
      this.API_ROOT,
      this.rcService.getRecipes,
      this.headers
    );
  }

  onFetch() {
    this.http.get<IRecipe[]>(this.API_ROOT).subscribe((res: IRecipe[]) => {
      this.rcService.fetchRecipes(res);
      return res;
    });
  }

  get headers() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
