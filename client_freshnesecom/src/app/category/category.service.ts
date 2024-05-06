import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  pagination = '';
  host: string = "http://localhost:8080/category"

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.host);
  }

  findById(id:number, page:number): Observable<any> {
    if(page >= 0) this.pagination = "?page="+page;
    return this.http.get(this.host+"/"+id+this.pagination);
  }

}
