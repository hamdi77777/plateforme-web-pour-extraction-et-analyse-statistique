import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { StatisticsService } from 'src/app/services/statistics.service';
import { Mot } from 'src/app/models/mot';
import { Info } from 'src/app/models/info';
import { FbTwi } from 'src/app/models/fb-twi';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
    public facebookChecked = false;
    public twitterChecked = false;
    public display1 = false;
    public display2 = false;
    public display3 = false;
    public views = 0;
    public domains = [];
    public productName;
    public page;
    public selectedDomains;
    datafcb: any;
    datatwitter: any;
    datayoutube: any;
    dataforum: any;
    public iduser;
    public resultats;
    public notefb=0;
    public notetwi=0;
    public noteyou=0;
    public noteforum=0;
    public nb=0;
    public res=0;
    public somme=0;
    public taux;
    public aux=false;
    public variable=false;
    public isres;
    public selec=false;
    public display=false;
    public l=0;
    public GraphElement = [];
    constructor(private translate: TranslateService,private urlsService: UrlsService, private statisticsService: StatisticsService) { }

    ngOnInit() {

        this.urlsService.getLien().subscribe(
            (result) => {
                {  
                    result.forEach(element => {
                        console.log(element);
                        this.domains.push({
                            label: element.url,
                           value: element
                        })
                    });
                }
            },
            (error) => {
                console.log(error);
            }

        )
    }


    send(selectedDomains) {
        this.display=true;
        this.l=0;

        //remplir la liste 

        if (!selectedDomains) { 

            selectedDomains=[];
        }
        if (this.facebookChecked) {
            selectedDomains.push({ url: 'facebook' }); 
        }

        if (this.twitterChecked) {
            selectedDomains.push({ url: 'twitter' });
        }

        this.iduser = Number(localStorage.getItem("idUser"));
        this.GraphElement = [];
        this.l=selectedDomains.length;

        selectedDomains.forEach(element => {

            if (element.url.includes('facebook')) {

                let Fbtwitter = new FbTwi(this.productName,this.iduser, element.url);
                
                this.statisticsService._analyseFb(Fbtwitter).subscribe(
                    result => {
                        this.notefb = parseFloat(result[1].toFixed(2));
                        console.log(this.notefb+" fb");
                        this.nb+=1;
                        this.display1 = true;
                       
                        this.datafcb = {
                            
                            labels: JSON.parse(result[0][0]),
                            datasets: [
                                {
                                    label: 'Likes',
                                    backgroundColor: '#42A5F5',
                                    borderColor: '#1E88E5',
                                    data: JSON.parse(result[0][1])

                                },
                                {
                                    label: 'Comments',
                                    backgroundColor: '#9CCC65',
                                    borderColor: '#7CB342',
                                    data: JSON.parse(result[0][2])
                                }
                            ]

                        }
                            ,
                            error => console.log(error)
                    }
                )


            }

            else if (element.url.includes('twitter')) {

                let Fbtwitter = new FbTwi(this.productName,this.iduser, element.url);
                // Ajout url pour facebook twitter, on passe element.url
                this.statisticsService._analyseTwi(Fbtwitter).subscribe(
                    result => {
                        this.notetwi = parseFloat(result[1].toFixed(2));
                        console.log(this.notetwi+" twi");
                        this.nb+=1;
                        this.display2 = true;

                        this.datatwitter = {
                            labels: JSON.parse(result[0][0]),
                            datasets: [
                                {
                                    label: 'Likes',
                                    data: JSON.parse(result[0][1]),
                                    fill: false,
                                    borderColor: '#4bc0c0'
                                },
                                {
                                    label: 'Replies',
                                    data: JSON.parse(result[0][2]),
                                    fill: false,
                                    borderColor: '#565656'
                                },
                                {
                                    label: 'Retweets',
                                    data: JSON.parse(result[0][3]),
                                    fill: false,
                                    borderColor: '#F44336'
                                }

                            ]
                        },
                            error => console.log(error)
                    }
                )
            }

            else if (element.url.includes('youtube')) {

                let info = new Info(element.idRech, this.productName, this.iduser,element.url);
                this.statisticsService._analyse(info).subscribe(
                    result => {
                        this.noteyou = parseFloat(result[1].toFixed(2));
                        console.log(this.noteyou+" you");
                        this.nb+=1;
                        
                        this.display3 = true;
                        this.views = JSON.parse(result[0])[0];
                       
                        this.datayoutube = {

                            labels: ['Likes', 'Dislikes'],
                            datasets: [
                                {
                                    data: JSON.parse(result[0]).slice(1),
                                    backgroundColor: [
                                        "#36A2EB",
                                        "#FFCE56"
                                    ],
                                    hoverBackgroundColor: [
                                        "#36A2EB",
                                        "#FFCE56"
                                    ]
                                }
                            ]
                        },
                            error => console.log(error)
                    }
                )
            }
            else {
                let info = new Info(element.idRech, this.productName, this.iduser,element.url);
                this.statisticsService._analyse(info).subscribe(
                    result => {
                        this.noteforum =  parseFloat(result[1].toFixed(2));
                        console.log(this.noteforum+" forum");
                        this.nb+=1;
                        //console.log(this.nb);
                        this.GraphElement.push({
                            name: element.url,
                            dataforum:
                            {
                                labels: ['Positive', 'Negatif', 'neutral'],
                                datasets: [
                                    {
                                        data: JSON.parse(result[0]),
                                        backgroundColor: [
                                            "#FF6384",
                                            "#36A2EB",
                                            "#FFCE56"
                                        ],
                                        hoverBackgroundColor: [
                                            "#FF6384",
                                            "#36A2EB",
                                            "#FFCE56"
                                        ]
                                    }
                                ]
                            }
                        })
                            ,

                            error => console.log(error)   
                    }
                )
            }
    })
}

//méthode permettant de récuperer le taux de réussite de la marque dans les réseaux sociaux déjà sélectionnés.
getResultat () {
   this.selec=true;
    this.somme= this.notefb + this.notetwi + this.noteyou + this.noteforum;
    console.log(this.somme+" somme");
    console.log(this.nb +" nb");
    this.res= this.somme/this.nb;
    this.statisticsService._getTaux().subscribe(
        (result) => { 
             {this.taux= result[0].taux_reussite;
                console.log(this.taux);
                console.log(this.res);
                if (this.res >= this.taux) {
                    this.aux=true;
                }
             }
        },
        (error)=>{
            console.log(error);
          }
     )
    }

//pour changer la langue
    changeLang(language: string) {
    this.translate.use(language);
}


}
