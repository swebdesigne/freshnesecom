import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CategoryModule } from './category/category.module';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category/category.service';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    CategoryComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [CategoryService],
})
export class AppComponent implements OnInit {
  category: CategoryModule;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe({
      next: (category) => {
        this.category = category;
      },
      error: (error) => {
        console.error('Error fetching catalog:', error);
      },
    });
  }
}
