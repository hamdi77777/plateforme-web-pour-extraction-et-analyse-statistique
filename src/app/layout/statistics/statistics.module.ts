import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';


import { StatisticsComponent } from './statistics.component';
import { PageHeaderModule } from '../../shared';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { StatisticsRoutingModule } from './statistics-routing.module';

@NgModule({
    imports: [CommonModule,
        Ng2Charts,
        StatisticsRoutingModule,
        PageHeaderModule,
        MultiSelectModule,
        ButtonModule,
        FormsModule,
        TranslateModule,
        ChartModule,
        CheckboxModule,
    ],
    declarations: [StatisticsComponent]
})
export class StatisticsModule { }
