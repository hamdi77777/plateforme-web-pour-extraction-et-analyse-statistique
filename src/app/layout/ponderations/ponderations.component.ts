import { Component, OnInit } from '@angular/core';
import { PonderationService } from 'src/app/services/ponderation.service';

@Component({
  selector: 'app-ponderations',
  templateUrl: './ponderations.component.html',
  styleUrls: ['./ponderations.component.scss']
})
export class PonderationsComponent implements OnInit {
public ponderations=[];
public selected = {};
display = false;
  constructor(private _ponderationService: PonderationService) { }

  ngOnInit() :void {
    this._ponderationService.getpond().subscribe(
      (result) => { 
           {this.ponderations= result;
              console.log(result);
           }
      },
      (error)=>{
          console.log(error);
        }
   )

  }

  showDialog(pond) {
    this.selected = {...pond};
    this.display = true;
}

save(pond) {
  // console.log(user);
   // if (!user.id) {
     //  this.users.push(user);
 //  }
  this._ponderationService.updatepond(pond).subscribe(
    result => {console.log(result);
    this.ngOnInit();
    }
    ,
    error => console.log(error)
  )

   this.selected = {};
} 


}
