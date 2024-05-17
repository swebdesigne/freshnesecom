import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModule} from "./user/user.module";
import {Url} from "../enums/url";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  logIn(user: UserModule): Observable<any> {
    return this.http.post(Url.HOST + "/users/login", user);
  }

  logOut() {
    return this.http.get(Url.HOST + "/users/logout");
  }

  create(user: UserModule) {
    return this.http.post(Url.HOST + "/users/create", user);
  }

  findById(user: UserModule) {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(user.username.trim() + ':' + user.password.trim())
    });
    return this.http.get(Url.HOST + "/users/" + user.id, {headers});
  }
}
