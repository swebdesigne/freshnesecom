import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Router } from 'express';
import { ProductService } from '../product.service';
import { ProductModule } from '../product.module';
import { CommonModule } from '@angular/common';
import { ProductRelatedModule } from './product-related.module';

@Component({
  selector: 'app-product-related',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-related.component.html',
  styleUrl: './product-related.component.scss'
})
export class ProductRelatedComponent implements OnInit, OnChanges {
  product: ProductRelatedModule[] = [];
  
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnChanges (changes: SimpleChanges): void {
  }
  
  ngOnInit (): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const randomArray:number[] = [];
      for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * (17 - 1 + 1)) + 1;
        randomArray.push(randomNumber);
      }

      this.productService.findByIds(randomArray).subscribe(items => {
        items.forEach((item: ProductModule, ind: number) => {
          if (item) {
            const relatedProduct: ProductRelatedModule = {
              product: item,
              parameters: []
            };
            this.product[ind] = relatedProduct;
            this.createParameters(item.parameters, ind);
          }
        });
      });
    })
  }

  createParameters(parameters: string, index: number): void {
    if (parameters) {
      parameters.split("\n").forEach((pp: string) => {
        const split = pp.split(":");
        if (split.length === 2) {
          const parameter = {
            name: split[0].trim(),
            value: split[1].trim()
          };
          this.product[index].parameters.push(parameter);
        }
      });
    }
  }

}
