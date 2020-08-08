import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private _analyseUrl="/analyse/";
  private _analysefbUrl="/facebook/";
  private _analysetwiUrl="/twitter/";
  private _getTauxUrl="/formule_taux/";
  constructor(private http: HttpClient) { }

  _analyse(info) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this._analyseUrl,info,{ headers:headers});

  }
  _analyseFb(Fb){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this._analysefbUrl,Fb,{ headers:headers});
  }
  _analyseTwi(twi){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this._analysetwiUrl,twi,{ headers:headers});
  }
  _getTaux() {
    let taux = this.http.get<any>(this._getTauxUrl);
    return taux;
  }
}
