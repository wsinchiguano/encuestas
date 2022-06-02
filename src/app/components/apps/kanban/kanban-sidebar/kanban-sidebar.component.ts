import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { KanbanCard, Comment } from 'src/app/api/kanban';
import { Member } from 'src/app/api/member';
import { AppsKanbanComponent } from '../apps.kanban.component';
import { MemberService } from 'src/app/service/memberservice';
import { KanbanService } from 'src/app/service/kanbanservice';
import { Subscription } from 'rxjs';

@Component({
    selector: 'kanban-sidebar',
    templateUrl: './kanban-sidebar.component.html',
    styleUrls: ['./kanban-sidebar.component.scss']
})
export class KanbanSidebarComponent implements OnInit, OnDestroy {

    card: KanbanCard;

    listId: string;

    priorities: Object[];

    filteredAssignees: Member[];

    assignees: Member[];

    newComment: Comment;

    comment: string = '';

    cardSubscription: Subscription;
    
    listSubscription: Subscription;

    timeout = null;

    @ViewChild('inputEl') inputEl: ElementRef;

    constructor(public parent: AppsKanbanComponent, private memberService: MemberService, private kanbanService: KanbanService) { 
        this.memberService.getMembers().then(members => this.assignees = members);

        this.cardSubscription = this.kanbanService.selectedCard$.subscribe(data => this.card = data);
        this.listSubscription = this.kanbanService.selectedListId$.subscribe(data => this.listId = data);
    }

    ngOnInit(): void {
        this.newComment = {
            id: "123",
            name: 'Jane Cooper',
            text: '',
        };

        this.priorities = [
            {color: "#FFB6B6", name: "High"},
            {color: "#FFC7E8", name: "Medium"},
            {color: "#D2D6FF", name: "Low"}
        ];
    }

    ngOnDestroy() {
        this.cardSubscription.unsubscribe();
        this.listSubscription.unsubscribe();
        clearTimeout(this.timeout);
    }

    close(){
        this.parent.sidebarVisible = false;
    }

    filterAssignees(event) {
        let filtered: Member[] = [];
        let query = event.query;

        for(let i = 0; i < this.assignees.length; i++) {
            let assignee = this.assignees[i];
            if (assignee.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(assignee);
            }
        }

        this.filteredAssignees = filtered;
    }

    onComment(event){
        event.preventDefault();
        this.newComment.text = this.comment;
        this.card.comments.unshift(this.newComment);
        this.comment = null;
    }

    onSave() {
        this.parent.sidebarVisible = false;
    }

    onDelete() {
        this.kanbanService.deleteCard(this.card.id, this.listId);
        this.parent.sidebarVisible = false;
    }

    focus() {
        this.timeout = setTimeout(() => this.inputEl.nativeElement.focus(), 1);
    }

}
