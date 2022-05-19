import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'list', loadChildren: () => import('./bloglist/app.bloglist.module').then(m => m.AppBloglistModule)},
    ])],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
