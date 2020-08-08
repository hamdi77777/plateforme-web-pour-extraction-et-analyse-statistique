import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TauxService {
  private _tauxUrl="/taux/1";
  constructor(private http: HttpClient) { }


  _PutTaux(taux) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this._tauxUrl,taux,{headers:headers});
  }

}
