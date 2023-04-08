import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/models/recipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

recipeList: Recipe[] = [];
searchSource: string = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=76f259eae67a4d039792ab892368b232&ingredients="
// search input strin needs to be the input of the saerch bar.
searchInput: string = "chicken";

constructor(private http: HttpClient) { }

findRecipe(): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.searchSource + this.searchInput);
}

searchRecipe(): void {
  this.findRecipe().subscribe(response => {
    console.log(response);
    this.recipeList = response;
  })
}


}
