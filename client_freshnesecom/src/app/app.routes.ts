import { Routes } from '@angular/router';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { IndexComponent } from './index/index.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {UserDetailsComponent} from "./login/user/user-details/user-details.component";

export const routes: Routes = [
  { path: "", component: IndexComponent, pathMatch: 'full' },
  { path: "category/:id", component: CategoryDetailComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "users/:id", component: UserDetailsComponent },
  { path: "**", component: PageNotFoundComponent }
];
