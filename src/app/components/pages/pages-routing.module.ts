import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'calendar', loadChildren: () => import('./calendar/app.calendar.module').then(m => m.AppCalendarModule)},
    {path: 'crud', loadChildren: () => import('./crud/app.crud.module').then(m => m.AppCrudModule)},
    {path: 'help', loadChildren: () => import('./help/app.help.module').then(m => m.AppHelpModule)},
    {path: 'invoice', loadChildren: () => import('./invoice/app.invoice.module').then(m => m.AppInvoiceModule)},
    {path: 'overview', loadChildren: () => import('./overview/app.overview.module').then(m => m.AppOverviewModule)},
    {path: 'pricing', loadChildren: () => import('./pricing/app.pricing.module').then(m => m.AppPricingModule)},
    {path: 'timeline', loadChildren: () => import('./timeline/app.timelinedemo.module').then(m => m.AppTimelineDemoModule)},
    {path: 'faq', loadChildren: () => import('./faq/app.faq.module').then(m => m.AppFaqModule)},
    {path: 'contact', loadChildren: () => import('./contact/app.contact.module').then(m => m.AppContactModule)},
    {path: 'wizard', loadChildren: () => import('./wizard/app.wizard.module').then(m => m.AppWizardModule)},
    {path: 'search-results', loadChildren: () => import('./search-results/app.search-results.module').then(m => m.AppSearchResultsModule)},
  ])],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
