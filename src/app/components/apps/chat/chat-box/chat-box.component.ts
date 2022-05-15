import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/api/message';
import { User } from 'src/app/api/user';
import { ChatService } from 'src/app/service/chatservice';

@Component({
    selector: 'chat-box',
    templateUrl: './chat-box.component.html',
})
export class ChatBoxComponent implements OnInit {

    defaultUserId: number = 123;

    message: Message;

    @Input() user: User; 

    constructor(private chatService: ChatService) {
        
    }

    setMessage() {
        if(this.user) {
          let filteredMessages = this.user.messages.filter(m => m.ownerId !== this.defaultUserId);
          this.message = filteredMessages[filteredMessages.length -1];
        }

        console.log(this.user, this.message)
    }

    ngOnInit(): void {
      this.setMessage();
    }
}
