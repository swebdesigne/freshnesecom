import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeModule } from '../recipe/recipe.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ProductModule {
  id: number;
  categoryId: number;
  name: string;
  price: number;
  description: string;
  img: string;
  parameters: string;
  customOrder: number;
  recipe: RecipeModule;
}
