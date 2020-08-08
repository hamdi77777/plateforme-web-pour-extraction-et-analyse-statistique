import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { PageHeaderModule } from './../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { AdministrationService } from './administration.service';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,
        AdministrationRoutingModule,
        PageHeaderModule,
        TranslateModule,
        DialogModule,
        FormsModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        TooltipModule],
    providers: [AdministrationService],
    declarations: [AdministrationComponent]
})
export class AdministrationModule { }
