import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class WebmasterAuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem('roleUser') === 'Webmaster') {
            return true;
        }

        this.router.navigate(['/accueil']);
        return false;
    }
}
