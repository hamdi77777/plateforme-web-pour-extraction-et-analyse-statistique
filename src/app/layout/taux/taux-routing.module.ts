import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TauxComponent } from './taux.component';

const routes: Routes = [
    {
        path: '', component: TauxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TauxRoutingModule {
}
