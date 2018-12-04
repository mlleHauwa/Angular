import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  recipes = [
    {title: "Pancake", description: "How to make pancake", author: "Itoro", imageUrl: "https://d2gk7xgygi98cy.cloudfront.net/48-3-large.jpg"},
    {title: "Akara", description: "My wonderful akaras", author: "Motunrayo", imageUrl: "https://d2gk7xgygi98cy.cloudfront.net/48-3-large.jpg"},
    {title: "Spaghetti", description: "How to make spag", author: "Dayo", imageUrl: "https://d2gk7xgygi98cy.cloudfront.net/48-3-large.jpg"}
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  addRecipe(recipe: any){
    this.recipes.push(recipe);
  }
}
