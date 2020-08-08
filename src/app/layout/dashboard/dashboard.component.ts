import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public sliders: Array<any> = [];
    public webmastersliders: Array<any> = [];
    public adminsliders: Array<any> = [];
    

    constructor() {
        //remplir la liste sliders avec les images
        this.sliders.push(
            {
                imagePath: 'assets/images/eone.png',
                label: '',
                text:
                    ''
            },
            {
                imagePath: 'assets/images/fff.PNG',
                label: '',
                text:
                    ''
            },
            {
                imagePath: 'assets/images/one.PNG',
                label: '',
                text: ''
            }
        );

        this.webmastersliders.push(
            {
                imagePath: 'assets/images/webmaster1.jpeg',
                label: '',
                text:
                    ''
            },
            {
                imagePath: 'assets/images/webmaster2.jpg',
                label: '',
                text:
                    ''
            },
            {
                imagePath: 'assets/images/webmaster4.png',
                label: '',
                text: ''
            },
            {
                imagePath: 'assets/images/webmaster5.jpg',
                label: '',
                text: ''
            }
        );

        this.adminsliders.push(
            {
                imagePath: 'assets/images/webmaster2.jpg',
                label: '',
                text:
                    ''
            }
        );
    }

    ngOnInit() {}


    //méthode permettant de récupérer le role de l'utilisateur  
    getRole() {
        return localStorage.getItem('roleUser');
    }

}
