import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductRelatedModule { 
  product: ProductModule;
  parameters: any[] = [];
}

