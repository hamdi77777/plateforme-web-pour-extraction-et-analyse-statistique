import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HistoriqueComponent } from './historique/historique.component';
import { WebmasterAuthGuard } from '../shared/guard/webmaster.auth.guard';
import { AdminAuthGuard } from '../shared/guard/admin.auth.guard';
import { UserAuthGuard } from '../shared/guard/user.auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
            { path: 'statistics', loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule), canActivate: [UserAuthGuard] },
            {
                path: 'administration', loadChildren: () =>
                    import('./administration/administration.module').then(m => m.AdministrationModule), canActivate: [AdminAuthGuard]
            },
            {
                path: 'ponderations', loadChildren: () =>
                    import('./ponderations/ponderations.module').then(m => m.PonderationsModule), canActivate: [AdminAuthGuard]
            },
            {
                path: 'profile', loadChildren: () =>
                    import('./profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'taux', loadChildren: () =>
                    import('./taux/taux.module').then(m => m.TauxModule), canActivate: [AdminAuthGuard]
            },
            { path: 'urls', loadChildren: () => import('./urls/urls.module').then(m => m.UrlsModule), canActivate: [WebmasterAuthGuard] },
            { path: 'etudeYoutube', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule), canActivate: [WebmasterAuthGuard] },
            {
                path: 'historique',
                component: HistoriqueComponent,
                canActivate: [UserAuthGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
