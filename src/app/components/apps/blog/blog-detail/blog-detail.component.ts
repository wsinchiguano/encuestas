import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { BlogService } from 'src/app/service/blog.service';
import { Comment } from 'src/app/api/comment';

@Component({
    selector: 'blog-detail',
    templateUrl: './blog-detail.component.html',

})
export class BlogDetailComponent implements OnInit {

    comments: Comment[];

    constructor(private breadcrumbService: BreadcrumbService, private blogService: BlogService) {
        this.breadcrumbService.setItems([
            { label: 'Blog Detail' },
        ]);
    }

    ngOnInit() {
        this.blogService.getComments().then(data => this.comments = data);
    }

}
