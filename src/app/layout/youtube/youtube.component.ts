import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Recherche } from 'src/app/models/recherche';
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
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

  constructor(private youtubeService: YoutubeService, private fb: FormBuilder) { 
    
    let formControls = {
      url: new FormControl('', [
          Validators.required,
      ]),
  }
  this.formulaire = fb.group(formControls);
}

get url() { return this.formulaire.get('url'); }

  ngOnInit():void {
    this.youtubeService.getUrlsyoutube().subscribe(
      (result) => {
          {
          this.rechs = result;
              console.log("url affiché");
              console.log(result);
          }
      },
      (error) => {
          console.log(error);
      }
  )

  
}

addUrl() {
  this.iduser = Number(localStorage.getItem("idUser"));
  let data = this.formulaire.value;
  let recherche = new Recherche(null,  this.iduser, data.url);
  this.youtubeService.addUrlyoutube(recherche).subscribe(
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

saveUrl(rech) {

  this.youtubeService.updateUrlyoutube(rech).subscribe(
      (result) => {
          console.log(result);
          this.ngOnInit();
      }
      ,
      error => console.log(error)
  )

  this.selectedUrl = {};
}

deleteUrl(rech) {
  let indice = this.rechs.indexOf(rech);
  this.rechs.splice(indice, 1);
  let _id = rech.id;
  this.youtubeService.deleteUrlyoutube(_id).subscribe(
      result => {
          console.log(result);
          console.log("supprimé");

      }
      ,
      error => console.log(error)
  )

}


  }

