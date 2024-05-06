import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../enums/url';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {
  constructor(private http: HttpClient) { }

  findById(id:number): Observable<any> {
    return this.http.get(Url.BREAD_CRUMBS+"/"+id);
  }
}
