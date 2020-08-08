import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public name=localStorage.getItem("nameUser");
  public firstname=localStorage.getItem("firstname");
  public lastname=localStorage.getItem("lastname");
  public id=localStorage.getItem("idUser");
  public role= localStorage.getItem("roleUser");
  public email=localStorage.getItem("emailUser");
  public display=false;
  formulaire: FormGroup;
  constructor(private adminService: AdminService,private fb: FormBuilder) { 
    let formControls = {
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repassword: new FormControl('', [
        Validators.required,
      ]),
    }     
    this.formulaire = fb.group(formControls);
  }
  get password() { return this.formulaire.get('password'); }
    get repassword() { return this.formulaire.get('repassword'); }


  ngOnInit() {
  
  }
showDialog() {
  this.display=true;
  
}
saveUser(){
  let data = this.formulaire.value;
  let user= new User(Number(this.id),this.firstname,this.lastname,this.email,data.password,this.role);
  this.adminService.updateUser(user).subscribe(
    result => {console.log(result);
    this.ngOnInit();
    }
    ,
    error => console.log(error)
  )


}
}
