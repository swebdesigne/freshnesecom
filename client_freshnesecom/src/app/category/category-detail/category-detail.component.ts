import { Component, OnInit } from '@angular/core';
import { CategoryModule } from '../category.module';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { CategoryService } from '../category.service';
import { CommonModule } from '@angular/common';
import { ServerStatus } from '../../enums/server.status';
import { BreadCrumbsComponent } from '../../bread-crumbs/bread-crumbs.component';
import { PaginationComponent } from '../../pagination/pagination.component';


@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, BreadCrumbsComponent, PaginationComponent],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.scss',
})
export class CategoryDetailComponent implements OnInit {
  category: CategoryModule = new CategoryModule();
  
  constructor(
    private activeRoute: ActivatedRoute, 
    private categoryService: CategoryService,
    private router: Router
  ) {}
  
  ngOnInit(): void {

    this.activeRoute.params.subscribe((params: Params) => {
      this.findById(+params['id'], 0);
    });

    this.activeRoute.queryParams.subscribe(params => {
      const page = +params['page'] - 1;
      const currentPage = isNaN(page) || page < 0 ? 0 : page;
      const catID = this.activeRoute.snapshot.params['id'];
      this.findById(catID, currentPage);
    })

  }

  private findById(categoryId: number, page: number = 0) {
    this.categoryService.findById(categoryId, page).subscribe({
      next: (category: CategoryModule) => {
        this.category = category;
      },
      error: (error) => {
        if (error.status === ServerStatus.NOT_FOUND) {
          this.router.navigate(['/404']);
        }
      }
    });
  }
}
