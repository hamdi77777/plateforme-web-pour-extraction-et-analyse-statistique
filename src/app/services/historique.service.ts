import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  //_getSource1Url="/historique2/";
 // _getSourcefbTwiUrl="/historique2_fcb_tw/";
  _gethistorique1_fb="/historique1_facebook/";
  _gethistorique1_twi="/historique1_twitter/";
  _gethistorique1_you="/historique1_youtube/";
  _gethistorique1_forum="/historique1_forum/";
  _gethistorique2="/historique2/";

  constructor(private http: HttpClient) { }


getHistorique1fbMot(iduser) {
    let mots = this.http.get<any>(this._gethistorique1_fb+iduser);
    return mots;

}
getHistorique1twiMot(iduser) {
  let mots = this.http.get<any>(this._gethistorique1_twi+iduser);
  return mots;

}
getHistorique1youMot(iduser) {
  let mots = this.http.get<any>(this._gethistorique1_you+iduser);
  return mots;

}
getHistorique1forMot(iduser) {
  let mots = this.http.get<any>(this._gethistorique1_forum+iduser);
  return mots;

}


getHistorique2(iduser,mot1) {
  let sources = this.http.post<any>(this._gethistorique2+iduser,mot1);
  return sources;
}
//getHistoriqueForumYoutube(iduser,mot1) {
  //let sources = this.http.post<any>(this._getSource1Url+iduser,mot1);
 // return sources;

//}


//getHistoriqurFbTwi(iduser,mot){
  //let sources = this.http.post<any>(this._getSourcefbTwiUrl+iduser,mot);
 // return sources;
//}

}
