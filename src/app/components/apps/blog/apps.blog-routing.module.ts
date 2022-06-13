import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'list', component: BlogListComponent },
        {path: 'detail', component: BlogDetailComponent},
        {path: 'edit', component: BlogEditComponent}
    ])],
    exports: [RouterModule]
})
export class AppsBlogRoutingModule { }
