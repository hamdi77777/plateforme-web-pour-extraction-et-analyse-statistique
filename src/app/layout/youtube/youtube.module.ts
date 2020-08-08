import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { YoutubeComponent } from './youtube.component';
import { PageHeaderModule } from './../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeService } from 'src/app/services/youtube.service';

@NgModule({
    imports: [CommonModule,
         YoutubeRoutingModule,
          PageHeaderModule, 
          TranslateModule, 
          DialogModule, 
          FormsModule,
          ButtonModule, 
          TooltipModule,
          FormsModule,
          ReactiveFormsModule,       
        ],
    providers: [YoutubeService],
    declarations: [YoutubeComponent]
})
export class YoutubeModule { }
