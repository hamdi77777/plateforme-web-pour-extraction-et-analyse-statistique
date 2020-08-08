import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class UserAuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem('roleUser') === 'User') {
            return true;
        }

        this.router.navigate(['/accueil']);
        return false;
    }
}
