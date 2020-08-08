import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TauxRoutingModule } from './taux-routing.module';
import { TauxComponent } from './taux.component';
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
        TauxRoutingModule,
        PageHeaderModule,
        TranslateModule,
        DialogModule,
        FormsModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        TooltipModule],
    declarations: [TauxComponent]
})
export class TauxModule { }
