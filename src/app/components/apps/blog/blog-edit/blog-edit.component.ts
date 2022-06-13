import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { Blog } from 'src/app/api/blog';

@Component({
    selector: 'app-blogedit',
    templateUrl: './blog-edit.component.html',
    styleUrls: ['../apps.blog.component.scss', '../../../../../assets/demo/editor.scss']
})
export class BlogEditComponent {

    blog: Blog = {
        title: '',
        description: '',
        status: '',
        tags: ['Sports'],
        images: []
    };

    uploadedFiles: any[] = [];

    focusedImageIndex: number;

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Blog Edit' },
        ]);
    }

    onChipRemove(item) {
        this.blog.tags = this.blog.tags.filter(i => i !== item);
    }

    onUpload(event) {
        for (let file of event.files) {
            this.blog.images.push(file);
        }
    }

    removeImage(file) {
        this.blog.images = this.blog.images.filter(i => i !== file);
    }
}

