import {Component, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModule } from '../category/category.module';
import { CategoryComponent } from '../category/category.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CategoryComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() category: CategoryModule;
}
