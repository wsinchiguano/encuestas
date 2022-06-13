import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'blog-card',
    templateUrl: './blog-card.component.html',
})
export class BlogCardComponent {

    @Input() blog: any;

    constructor(private router:Router){}

    navigateToDetail(): void {
        this.router.navigateByUrl("/blog/detail");
    }
}
