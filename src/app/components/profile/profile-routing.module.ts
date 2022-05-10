import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'create', loadChildren: () => import('./create/app.create.module').then(m => m.AppCreateModule) },
        { path: 'profilelist', loadChildren: () => import('./profilelist/app.profilelist.module').then(m => m.AppProfileListModule) },
        { path: 'overview', loadChildren: () => import('./overview/app.overview.module').then(m => m.AppOverviewModule) },


    ])],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }

