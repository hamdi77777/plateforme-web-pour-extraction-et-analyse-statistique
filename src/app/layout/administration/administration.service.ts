
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AdministrationService {

    constructor() { }

    getUsers() {
        return [{ id: 1, firstName: 'Khalil', lastName: 'Zouaoui', email: 'kk@z.com', role: 'Admin', active: true },
        { id: 2, firstName: 'Nihed', lastName: 'Zmerli', email: 'nn@z.com', role: 'Webmaster', active: true },
        { id: 3, firstName: 'Kmar', lastName: 'Zouaoui', email: 'kz@zz.com', role: 'User', active: true }];
    }

}
