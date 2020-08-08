import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from 'src/app/services/historique.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss'],
})
export class HistoriqueComponent implements OnInit {

  public sources;
  public sourcesfbtwi;
  public type2;
  public type;
  public mots ;
  public motsFbTwi;
  public lien;
  public id;
  public selected={};
  public l;
  public motsfb;
  public motstwi;
  public motsyou;
  public motsfor;
  constructor(private historiqueService: HistoriqueService) { }
  

  ngOnInit(): void {

    this.id = localStorage.getItem("idUser"); //récupérer l'id de l'utilisateur courant

    this.historiqueService.getHistorique1fbMot(this.id).subscribe(

      (result) => {
        {
          this.motsfb = result; //remplir la liste motsfb avec l'historique lié à la recherche dans facebook ( date et marque)
          console.log(result);
        }
       },
      (error) => {
        console.log(error);
      })

      this.historiqueService.getHistorique1twiMot(this.id).subscribe(

        (result) => {
          {
            this.motstwi = result; //remplir la liste motstwi avec l'historique lié à la recherche dans twitter (date et marque)
             console.log(result);
          }
        },
       (error) => {
          console.log(error);
        })

        this.historiqueService.getHistorique1youMot(this.id).subscribe(

          (result) => {
            {
              this.motsyou = result; //remplir la liste motsyou avec l'historique lié à la recherche dans youtube (date et marque)
               console.log(result);
            }
          },
          (error) => {
            console.log(error);
          })

          this.historiqueService.getHistorique1forMot(this.id).subscribe(

            (result) => {
              {
                this.motsfor = result; //remplir la liste motsfor avec l'historique lié à la recherche dans forum (date et marque)
                 console.log(result);
              }
            },
            (error) => {
              console.log(error);
            })
     
    }

    //méthode permettant de récupérer l'historique (likes, comments,dislikes, views)
    selectMot(mot) {
      this.selected = mot ;
      console.log(this.selected);
      this.historiqueService.getHistorique2(this.id, this.selected).subscribe(
  
        (result) => {
          {
          console.log(result);
          this.type=result[0];
         this.l=result[1][0].length;
          this.lien=result[1][0].slice(2,this.l-2);
          this.sources=result[1][1];
         
    
          }
        },
        (error) => {
          console.log(error);
        })
    }
    

}




