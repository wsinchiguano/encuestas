import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessdeniedRoutingModule } from './accessdenied-routing.module';
import { AccessdeniedComponent } from './accessdenied.component';

@NgModule({
    declarations: [
        AccessdeniedComponent
    ],
    imports: [
        CommonModule,
        AccessdeniedRoutingModule
    ]
})
export class AccessdeniedModule { }
