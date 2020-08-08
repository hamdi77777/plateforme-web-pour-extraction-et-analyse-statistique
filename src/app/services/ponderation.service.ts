import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PonderationService {
   private getpondUrl="/ponderations";
   private updatepondUrl="/ponderations_update/1";
  constructor(private http: HttpClient) { }

  getpond(){
    let _ponderations = this.http.get<any>(this.getpondUrl);
    return _ponderations;
  }
  updatepond(pond)
  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this.updatepondUrl,pond,{headers:headers});
  }
}
