import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlsRoutingModule } from './urls-routing.module';
import { UrlsComponent } from './urls.component';
import { PageHeaderModule } from './../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { UrlsService } from './urls.service';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,
         UrlsRoutingModule,
          PageHeaderModule, 
          TranslateModule, 
          DialogModule, 
          FormsModule,
          ButtonModule, 
          TooltipModule,
          FormsModule,
          ReactiveFormsModule,       
        ],
    providers: [UrlsService],
    declarations: [UrlsComponent]
})
export class UrlsModule { }
