import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoriqueComponent } from './historique/historique.component';
import { PageHeaderModule } from '../shared';
import { UserAuthGuard } from '../shared/guard/user.auth.guard';
import { WebmasterAuthGuard } from '../shared/guard/webmaster.auth.guard';
import { AdminAuthGuard } from '../shared/guard/admin.auth.guard';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        PageHeaderModule,
        
    ],
    providers: [UserAuthGuard, WebmasterAuthGuard, AdminAuthGuard],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, HistoriqueComponent]
})
export class LayoutModule { }
