import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PonderationsComponent } from './ponderations.component';

const routes: Routes = [
    {
        path: '', component: PonderationsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PonderationsRoutingModule {
}
