import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { Recherche } from 'src/app/models/recherche';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-urls',
    templateUrl: './urls.component.html',
    styleUrls: ['./urls.component.scss'],
})
export class UrlsComponent implements OnInit {

    formulaire: FormGroup;
    public rechs = [];
    public expressions = [];
    public selectedUrl = {};
    public selectedExpression = {};
    displayExpression = false;
    displayUrl = false;
    displayUrl1 = false;
    selected = {};
    iduser;
    constructor(private urlsService: UrlsService, private fb: FormBuilder) {
        let formControls = {
            url: new FormControl('', [
                Validators.required,
            ]),
        }
        this.formulaire = fb.group(formControls);
    }

    get url() { return this.formulaire.get('url'); }

    //à l"ouverture de la page, tous les urls s"affichent en appelant le service urlsService
    ngOnInit(): void {
        this.urlsService.getAllUrls().subscribe(
            (result) => {
                {
                this.rechs = result; //le résultat est stocké
                    console.log("url affiché");
                    console.log(result);
                }
            },
            (error) => {
                console.log(error);
            }
        )

        // this.expressions = this.urlsService.getExpressions();
    }

    //méthode permettant d'ajouter un url 
    addUrl() {
        this.iduser = Number(localStorage.getItem("idUser"));
        let data = this.formulaire.value;
        let recherche = new Recherche(null,  this.iduser, data.url);
        this.urlsService.addUrl(recherche).subscribe(
            result => {
                console.log(result);
                this.ngOnInit();
            }
            ,
            error => console.log(error)
        )
        this.selectedUrl = {};
    }

    selectUrl(rech) {
        this.selected = {...rech};
       

    }

    showDialogUrl(rech) {
        this.selectedUrl = rech;
        this.displayUrl = true;
    }
    showDialogUrl1(rech) {
        this.selectedUrl = {...rech};
        this.displayUrl1 = true;
    }

    showDialogExpression(expression) {
        this.selectedExpression= {...expression};
        this.displayExpression = true;
    }

    saveUrl(rech) {

        this.urlsService.updateUrl(rech).subscribe(
            (result) => {
                console.log(result);
                this.ngOnInit();
            }
            ,
            error => console.log(error)
        )

        this.selectedUrl = {};
    }


     saveExpression(selected,expression) {
       console.log('save', expression)
    //  if (!expression.id) {
    //     this.expressions.push(expression);
    //  }

      this.urlsService.updateExpression(selected.url,expression).subscribe(
        (result) => {
            console.log(result);
            this.ngOnInit();
        }
        ,
        error => console.log(error)
    )


      this.selectedExpression = {};
     }

   //méthode permettant de supprimer un url sélectionné
     deleteUrl(rech) {
        let indice = this.rechs.indexOf(rech);
        this.rechs.splice(indice, 1);
        let _id = rech.id;
        this.urlsService.deleteUrl(_id).subscribe(
            result => {
                console.log(result);
                console.log("supprimé");

            }
            ,
            error => console.log(error)
        )

    }

}




