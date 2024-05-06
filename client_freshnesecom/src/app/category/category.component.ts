import { Component, Input } from "@angular/core";
import { CategoryModule } from "./category.module";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CategoryService } from "./category.service";
import { RouterLink, Router } from "@angular/router";
import { ServerStatus } from "../enums/server.status";
import { BreadCrumbsComponent } from "../bread-crumbs/bread-crumbs.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  //   styleUrls: ['./category.component.scss']
  standalone:true,
  imports:[CommonModule, HttpClientModule, RouterLink, BreadCrumbsComponent],
})
export class CategoryComponent {
  @Input() category: CategoryModule;

  constructor(
    private categoryService: CategoryService, 
    private router: Router
  ){}

  findAll() {
    this.categoryService.findAll().subscribe({
      next: (category) => {
        this.category = category
      },
      error: (error) => {
        if (error.status === ServerStatus.NOT_FOUND) {
          this.router.navigate(['/404']);
        }
      }
    });
  }
}
