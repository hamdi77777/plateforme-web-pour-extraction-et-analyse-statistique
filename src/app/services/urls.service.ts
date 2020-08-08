import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  private _getAllUrls = "/urls";
  private _addUrl = "/addurl/";
  private _deleteUrl = "/delurl";
  private _getExpressions = "/expressions";
  private _upUrl= "/upurl";
  private _upExp ="/upexpression";
  private _getAll="/lien_drop_down/";


  constructor(private http: HttpClient) { }


  getAllUrls() {
    let urls = this.http.get<any>(this._getAllUrls);
    return urls;
  }

  addUrl(url) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this._addUrl, url, { headers: headers });
  }

  deleteUrl(id) {
    return this.http.delete<any>(this._deleteUrl + "/" + id);
  }
  getExpressions(idd) {
    let exps = this.http.get<any>(this._getExpressions + "/" + idd);
    return exps;

  }
  updateUrl(rech) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this._upUrl+'/'+rech.id,rech,{headers:headers});
  }

  updateExpression(selected,expression) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this._upUrl+"/"+selected.id,expression,{headers:headers});
  }
  getLien(){
    let urls = this.http.get<any>(this._getAll);
    return urls;
  }

}


