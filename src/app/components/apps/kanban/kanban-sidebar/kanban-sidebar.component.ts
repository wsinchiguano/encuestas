import { Component, OnInit } from '@angular/core';
import { KanbanCard, Comment } from 'src/app/api/kanban';
import { Member } from 'src/app/api/member';
import { AppsKanbanComponent } from '../apps.kanban.component';
import { MemberService } from 'src/app/service/memberservice';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'kanban-sidebar',
    templateUrl: './kanban-sidebar.component.html',
    styleUrls: ['./kanban-sidebar.component.scss']
})
export class KanbanSidebarComponent implements OnInit {

    visible = true;

    card: KanbanCard;

    priorities: Object[];

    filteredAssignees: Member[];

    assignees: Member[];

    newComment: Comment;

    comment: string = '';

    menuItems: MenuItem[];

    constructor(public parent: AppsKanbanComponent, private memberService: MemberService) { 
        this.memberService.getMembers().then(members => this.assignees = members);
    }

    ngOnInit(): void {

        this.newComment = {
            id: 123,
            name: 'Jane Cooper',
            text: '',
        };

        this.card = {
            title: 'Qualitative resarch planning',
            description: 'Hey there, we’re just writing to let you know',
            startDate: "2022-05-25T16:00:00",
            dueDate: "2022-05-25T16:00:00",
            completed: false,
            progress: 0,
            assignees: [
                {id: 1000, name: 'Ioni Bowcher', image: 'ionibowcher.png'},
                {id: 1001, name: 'Amy Elsner', image: 'amyelsner.png'},
            ],
            comments: [
                {id: 1000, name: 'Ioni Bowcher', image: 'ionibowcher.png', text: 'How likely are you to recommend our company'},
                {id: 1001, name: 'Amy Elsner', image: 'amyelsner.png', text: 'Ok thanks!'},
            ],
            priority: {color: '#3b82f6', name: 'Medium'},
            attachments: 4
        };

        this.priorities = [
            {color: "#FFB6B6", name: "High"},
            {color: "#FFC7E8", name: "Medium"},
            {color: "#D2D6FF", name: "Low"}
        ];

        this.menuItems = [
            {label:'Actions',  items: [
                {separator: true},
                {label:'Copy list'},
                {label:'Copy list'},
                {label:'Move list'},
            ]}
          ];
    }

    close(){
        this.parent.sidebar = {
            visible: false,
            content: null
        };
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
        this.card.comments.push(this.newComment);
        this.comment = null;
    }

}
