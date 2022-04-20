import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCreateComponent } from './create/app.create.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [AppCreateComponent]
})
export class ProfileModule { }
