import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  host: string = "http://localhost:8080/product"

  constructor(private http: HttpClient) { }

  findById(id:number): Observable<any> {
    return this.http.get(this.host+"/"+id);
  }

  findByIds(id:number[]): Observable<any> {
    return this.http.get(this.host+"/related/"+id.join(","))
  }
}
