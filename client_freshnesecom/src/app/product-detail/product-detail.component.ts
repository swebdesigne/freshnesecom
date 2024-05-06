import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductModule } from './product.module';
import { CommonModule } from '@angular/common';
import { ServerStatus } from '../enums/server.status';
import { BreadCrumbsComponent } from '../bread-crumbs/bread-crumbs.component';
import { ProductRelatedComponent } from './product-related/product-related.component';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, BreadCrumbsComponent, ProductRelatedComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit{
  product: ProductModule;
  parameters = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit (): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.productService.findById(id).subscribe({
        next: (product: ProductModule) => {
          this.product = product;
          this.createParameters(product.parameters);
        },
        error: (error) => {
          if (error.status === ServerStatus.NOT_FOUND) {
            this.router.navigate(['/404']);
          }
        }
      });
    });
  }

  private createParameters(parameters) {
    this.parameters = [];
    parameters.split("\n").map((pp:string, index:number) => {
      const obj: { name: string, value: string } = { name: '', value: '' };
      const split = pp.split(":");
      if (split.length == 2) {
        obj.name = split[0].trim();
        obj.value = split[1].trim();
      }
      this.parameters.push(obj);
    })
  }

}
