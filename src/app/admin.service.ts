import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _getAllUsersUrl = "/users"; 
  constructor(private http: HttpClient) { }

  getAllUsers() {
    let users = this.http.get<any>(this._getAllUsersUrl);
    return users;
 
}
}
