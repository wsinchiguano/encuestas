import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Member } from 'src/app/api/member';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { MemberService } from 'src/app/service/memberservice';

interface Task {
    id: number;
    name: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
    startStr?: string;
    endStr?: string;
    members?: string[];
    completed: boolean;
}

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss'],
    providers: [MessageService, MemberService]
})
export class CreateTaskComponent implements OnInit {
    
    task: Task;
    
    members: Member[];
    
    filteredMembers: Member[];
    
    constructor(public breadcrumbService: BreadcrumbService, private memberService: MemberService, private messageService: MessageService) {
        this.breadcrumbService.setItems([
            {label: 'Create Task'}
        ]);
    }

    ngOnInit(): void {
        this.memberService.getMembers().then(members => this.members = members);
        this.resetTask();
    }

    filterMembers(event) {
        let filtered: Member[] = [];
        let query = event.query;

        for(let i = 0; i < this.members.length; i++) {
            let member = this.members[i];
            if (member.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(member);
            }
        }

        this.filteredMembers = filtered;
    }

    save() {
        let id = Math.floor(Math.random() * 1000);
        this.task.id = id;
        this.task.startStr = this.task.startDate.toISOString().slice(0,10);
        this.task.endStr = this.task.endDate.toISOString().slice(0,10);
        this.task.completed = false;

        this.messageService.add({severity: 'success', summary: 'Success', detail: `Task "${this.task.name}" created successfully.`});
    }

    resetTask() {
        this.task = {id: null, name: '', description: '', startDate: null, endDate: null, startStr: '', endStr: '', members: [], completed: false};
    }
}