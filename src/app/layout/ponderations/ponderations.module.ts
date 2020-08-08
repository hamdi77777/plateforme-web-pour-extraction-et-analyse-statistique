import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PonderationsRoutingModule } from './ponderations-routing.module';
import { PonderationsComponent } from './ponderations.component';
import { PageHeaderModule } from './../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,
        PonderationsRoutingModule,
        PageHeaderModule,
        TranslateModule,
        DialogModule,
        FormsModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        TooltipModule],
    //providers: [AdministrationService],
    declarations: [PonderationsComponent]
})
export class PonderationsModule { }
