import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    constructor(private fb: FormBuilder,private _userService:UserService,private router: Router) {
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
              repassword: new FormControl('', [
                Validators.required,
              ]),
            }        
            this.registerForm = fb.group(formControls);
        
    }


    get firstname() { return this.registerForm.get('firstname'); }
    get lastname() { return this.registerForm.get('lastname'); }
    get email() { return this.registerForm.get('email'); }
    get password() { return this.registerForm.get('password'); }
    get repassword() { return this.registerForm.get('repassword'); }



    ngOnInit(): void {
    }

    register() {
        let data = this.registerForm.value;
       // let user = new User(null,data.firstname,data.lastname,data.email,data.password,"",false);
        this._userService.registerUser(data).subscribe(
        result => {
         console.log(result);
         this.router.navigate(['/login']); // en cas de succès, l"utilisateur est redirigé vers la page de login.

       }
      ,
      error => console.log(error) //sinon une erreur s"affiche.
      )
        
    }

}
