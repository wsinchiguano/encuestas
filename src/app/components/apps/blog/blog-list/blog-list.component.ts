import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { BlogService } from 'src/app/service/blog.service';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Blog } from 'src/app/api/blog';

@Component({
    selector: 'blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['../apps.blog.component.scss']

})
export class BlogListComponent implements OnInit{

    rowCount = 6;

    sortOptions: SelectItem[] = [
        { label: 'Most recent', value: '!share' },
        { label: 'Most shared', value: 'share' }
    ];;

    sortOrder: number;

    sortField: string;

    blogs: Blog[];

    constructor(private breadcrumbService: BreadcrumbService, private primengConfig: PrimeNGConfig, private blogService: BlogService) {
        this.breadcrumbService.setItems([
            { label: 'Blog List' }
        ]);
        this.primengConfig.ripple = true;
    }

    ngOnInit() {
        this.blogService.getBlogs().then(data => this.blogs = data);
    }

    onSortChange(event): void {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
}
