import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BreadCrumbsModule } from './bread-crumbs.module';
import { BreadCrumbsService } from './bread-crumbs.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bread-crumbs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss',
  providers: [BreadCrumbsService]
})
export class BreadCrumbsComponent implements OnChanges {
  @Input() categoryId: number;
  @Input() directive: string = '';
  brc: BrowserModule[] = [];

  constructor(private brcService: BreadCrumbsService) {}
  
  ngOnChanges (changes: SimpleChanges): void {
    if(!isNaN(+this.categoryId))
      this.brcService.findById(+this.categoryId).subscribe(params => { this.brc = params })
  }
}
