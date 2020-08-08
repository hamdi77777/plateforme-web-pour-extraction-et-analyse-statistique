import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private _getAllUrls = "/urls_youtube/";
  private _addUrl = "/addurl_youtube/";
  private _deleteUrl = "/delurl_youtube/";
  private _upUrl="/upurl_youtube/";

  constructor(private http: HttpClient) { }
  getUrlsyoutube() {
    let urls = this.http.get<any>(this._getAllUrls);
    return urls;
  }
  addUrlyoutube(url) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this._addUrl, url, { headers: headers });
  }
  deleteUrlyoutube(id) {
    return this.http.delete<any>(this._deleteUrl + "/" + id);
  }
  updateUrlyoutube(rech) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this._upUrl+'/'+rech.id,rech,{headers:headers});
  }

}
