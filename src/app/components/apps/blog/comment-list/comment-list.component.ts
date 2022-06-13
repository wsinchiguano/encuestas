import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/api/comment';

@Component({
    selector: 'comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls:['../apps.blog.component.scss'],

})
export class CommentListComponent {

    @Input() comments: Comment[];

    rowCount = 3;
}
