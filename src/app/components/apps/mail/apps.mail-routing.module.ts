import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsMailComponent } from './apps.mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppsMailComponent, children: [
      {path: '', redirectTo: 'inbox', pathMatch: 'full'},
      {path: 'inbox', component: InboxComponent},
      {path: 'detail', component: DetailComponent},
      {path: 'compose', component: ComposeComponent},
    ]},
  ])],
  exports: [RouterModule]
})
export class AppsMailRoutingModule { }
