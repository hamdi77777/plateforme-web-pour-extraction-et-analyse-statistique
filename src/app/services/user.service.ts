import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _registerUserUrl= "/register/";
  constructor(private http: HttpClient) {
   }

  registerUser(user) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this._registerUserUrl,user,{ headers:headers});
  }
}

 
