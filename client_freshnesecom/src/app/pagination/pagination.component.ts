import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() categoryId: number;
  @Input() count: number = 0;
  @Input() length: any[];
  @Input() directive: string;
  @Input() isShowMore = false;
  size: number[];
  activeElement = 1;

  constructor(private route: ActivatedRoute) {}
  

  ngOnInit (): void {
    this.route.queryParams.subscribe(param => {
      this.activeElement = param['page'] != undefined ? param['page'] - 1: 0;
    })
  }

  ngOnChanges(): void {
    this.updatePagination();
  }

  private updatePagination() {
    const pages = Math.floor(this.count) / 3;
    const pageCount = pages % 2 === 0 ? pages : pages + 1;
    this.size = Array.from({ length: pageCount }, (_, i) => i);
  }
}
