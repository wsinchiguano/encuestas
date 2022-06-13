import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppProfileComponent } from './app.profile.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppProfileComponent, children:[
            { path: '', redirectTo:'overview', pathMatch:'full'},
            { path: 'overview', component: ProfileOverviewComponent},
            { path: 'followers', component: ProfileFollowersComponent},
            { path: 'settings', component: ProfileSettingsComponent},
        ]},
        { path: 'create', component: ProfileCreateComponent},
        { path: 'profile-list', component: ProfileListComponent},

    ])],
    exports: [RouterModule]
})
export class AppProfileRoutingModule { }
