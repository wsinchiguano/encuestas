import { Component, Input } from '@angular/core';

@Component({
    selector: 'bloglistcard',
    templateUrl: './bloglistcard.component.html',
})
export class BloglistcardComponent {
    
    @Input() blog: any;
}
