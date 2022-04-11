import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'productoverview', loadChildren: () => import('./productoverview/productoverview.module').then(m => m.ProductoverviewModule)}
  ])],
  exports: [RouterModule]
})
export class AppEcommerceRoutingModule { }
