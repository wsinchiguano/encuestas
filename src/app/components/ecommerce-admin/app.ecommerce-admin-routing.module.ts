import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'productlist', loadChildren: () => import('./productlist/app.productlist.module').then(m => m.AppProductListModule)},
  ])],
  exports: [RouterModule]
})
export class AppEcommerceAdminRoutingModule { }
