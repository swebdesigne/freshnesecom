import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product-detail/product.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { 
  id:number;
  name:string;
  parent:CategoryModule;
  children:CategoryModule[] = [];
  items: ProductModule[] = [];
  countItems: number;
}
