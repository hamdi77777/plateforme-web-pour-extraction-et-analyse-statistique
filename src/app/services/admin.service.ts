import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _getAllUsersUrl = "/users"; 
  private _deleteUserUrl = "/delete/";
  private _updateUserUrl ="/update/";
  private _addUserUrl ="/register/";
  constructor(private http: HttpClient) { }

  getAllUsers() {
    let users = this.http.get<any>(this._getAllUsersUrl);
    return users;
 
}

_deleteUser(userId) {
  return this.http.delete<any>(this._deleteUserUrl+"/"+userId);
}
updateUser(user) {
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.put<any>(this._updateUserUrl+user.id,user,{headers:headers});
}

addUser(user) {
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.post<any>(this._addUserUrl,user,{ headers:headers});
}

}
