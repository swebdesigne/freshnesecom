import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientModule } from '../ingredient/ingredient.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RecipeModule { 
  id: number;
	name: string;
	description: string;
	ingredient: IngredientModule[];
}
