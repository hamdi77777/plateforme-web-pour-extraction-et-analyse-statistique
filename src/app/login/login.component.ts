import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  constructor(private fb: FormBuilder, private _authService: LoginService, private router: Router) {
    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    }
    this.authForm = fb.group(formControls);

  }
  get email() { return this.authForm.get('email'); }
  get password() { return this.authForm.get('password'); }

  ngOnInit() { }

  onLoggedin() {
    let data = this.authForm.value;

    //en cas de succès, on stocke les informations de l"utilisateur dans la base de données du navigateur sinon une erreur s"affiche dans le console
    
    console.log(data);
    this._authService.login(data).subscribe(
      result => {
        console.log(result[0]);
        localStorage.setItem("idUser", result[0].id.toString());
        localStorage.setItem("firstname", result[0].firstname);
        localStorage.setItem("lastname", result[0].lastname);
        localStorage.setItem("nameUser", result[0].firstname + ' ' + result[0].lastname);
        localStorage.setItem("roleUser", result[0].role);
        localStorage.setItem("emailUser", result[0].email);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
      }
      ,
      error => console.log(error)
    )

  }

}

