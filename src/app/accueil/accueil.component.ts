import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
    public sliders: Array<any> = [];
    constructor()
     {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );
     }


    ngOnInit() {}

    scroll(el: HTMLElement) {
        el.scrollIntoView();
    }

    }

  