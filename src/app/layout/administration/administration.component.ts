import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';





@Component({
    selector: 'app-administration',
    templateUrl: './administration.component.html',
    styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {

    formulaire: FormGroup;
    public users=[];
    public selectedUser = {};
    display = false;
    display1 = false;
    public roles = [{ label: 'User', value: 'User' },
    { label: 'Webmaster', value: 'Webmaster' },
   { label: 'Admin', value: 'Admin' }];
    public trueFalse = [{ label: 'non', value: false }, { label: 'oui', value: true }]
    constructor(private _adminService: AdminService,private fb: FormBuilder){
      let formControls = {
        firstname: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z][^0-9#&<>\"~;$^%{}?]{1,20}$')
        ]),
        lastname: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z][^0-9#&<>\"~;$^%{}?]{1,20}$')
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email
          ]),
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(8)
          ]),
          role: new FormControl('', [
            Validators.required,
          ]),
          state: new FormControl('', [
            Validators.required,
          ])
        }        
        this.formulaire = fb.group(formControls);
    
}
get firstname() { return this.formulaire.get('firstname'); }
get lastname() { return this.formulaire.get('lastname'); }
get email() { return this.formulaire.get('email'); }
get password() { return this.formulaire.get('password'); }
get role() { return this.formulaire.get('role'); }
get state() { return this.formulaire.get('state'); }





    ngOnInit(): void {
      this._adminService.getAllUsers().subscribe(
        (result) => { 
             {this.users= result; //remplir la liste users 
                console.log("aaa");
                console.log(result);
             }
        },
        (error)=>{
            console.log(error);
          }
     )
      }

      

   showDialog(user) {
        this.selectedUser = {...user};
        this.display = true;
    }

    showDialog1(user) {
      this.selectedUser = user;
      this.display1 = true;
  }
  //modifier un utilisateur
    saveUser(user) {
      
      this._adminService.updateUser(user).subscribe(
        result => {console.log(result);
        this.ngOnInit();
        }
        ,
        error => console.log(error)
      )

       this.selectedUser = {};
    } 
  
   //ajouter un utilisateur
    addUser() {
      let data = this.formulaire.value;
        let user = new User(null,data.firstname,data.lastname,data.email,data.password,data.role,data.state);
        this._adminService.addUser(user).subscribe(
        result => {
         console.log(result);
         this.ngOnInit();
       }
      ,
      error => console.log(error)
      )
      this.selectedUser = {};
  }

  //supprimer un utilisateur
   deleteUser(user) {
    let indice = this.users.indexOf(user);
    this.users.splice(indice, 1);
    let _id= user.id;
    this._adminService._deleteUser(_id).subscribe(
      result => { console.log(result);
        console.log("supprimé");
      
    }
      ,
      error => console.log(error)
    )

    }

   

}
