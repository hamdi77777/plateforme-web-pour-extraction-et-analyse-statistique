import { Component, OnInit } from '@angular/core';
import { TauxService } from 'src/app/services/taux.service';
import { Formuletaux } from 'src/app/models/formuletaux';

@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.scss']
})
export class TauxComponent implements OnInit {
 public taux;
  constructor(private tauxService: TauxService) { }

ngOnInit() {

}
//méthode permettant de modifier le taux de réussite
putTaux() {
 let objet= new Formuletaux(this.taux)
  this.tauxService._PutTaux(objet).subscribe(
  result => {console.log(result); 
  }
  ,
  error => console.log(error)
)
}

}
