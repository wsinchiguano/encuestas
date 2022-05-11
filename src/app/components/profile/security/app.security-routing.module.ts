import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSecurityComponent } from './app.security.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppSecurityComponent }

    ])],
    exports: [RouterModule]
})
export class AppSecurityRoutingModule { }
