import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/eventservice';
import { BreadcrumbService } from '../../../service/app.breadcrumb.service';
import { CalendarOptions, EventApi } from '@fullcalendar/angular';

@Component({
    selector: 'app-apps.calendar',
    templateUrl: './apps.calendar.component.html',
    styles: [`
      :host ::ng-deep {
        .p-dialog-header {
          border-bottom: 1px solid var(--surface-border);
        }
      }
    `]
})
export class AppsCalendarComponent implements OnInit {

    events: any[];

    today: string;

    calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth'
    };

    header: any;

    showDialog: boolean;

    clickedEvent = null;

    dateClicked: boolean;

    edit: boolean = false;

    tags: any[];

    view: string;
    
    changedEvent: any;

    constructor(private eventService: EventService, public breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Calendar'}
        ]);
  }

    ngOnInit(): void {
        this.today = new Date().toISOString().slice(0,10);

        this.eventService.getEvents().then(events => {
            this.events = events;
            this.calendarOptions = {...this.calendarOptions, ...{events: events}};
            this.tags = this.events.map(item => item.tag);
        });
      
        this.calendarOptions = {
            height: 650,
            initialDate: this.today,
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            eventClick: (e) => this.onEventClick(e),
            select: (e) => this.onDateSelect(e)
        };
    }

    onEventClick(e) {
        this.clickedEvent = e.event;
        let plainEvent = e.event.toPlainObject({collapseExtendedProps: true, collapseColor: true});
        this.view = 'display';
        this.showDialog = true;

        this.changedEvent = {...plainEvent, ...this.clickedEvent};
        this.changedEvent.start = this.clickedEvent.start;
        this.changedEvent.end = this.clickedEvent.end;
        console.log(this.changedEvent)
    }

    onDateSelect(e) {
        this.view = 'new'
        this.showDialog = true;
        this.changedEvent = {...e, title: null, description: null, location: null, backgroundColor: null, borderColor: null, textColor: null, tag: {color: null, name: null}}
    }

    handleSave() {
        let id = Math.floor(Math.random() * 10000);
        this.showDialog = false;

        this.clickedEvent = {id: id, ...this.changedEvent, backgroundColor: this.changedEvent.tag.color, borderColor: this.changedEvent.tag.color, textColor: '#212121'};
        this.events = [...this.events, this.clickedEvent];
        this.calendarOptions = {...this.calendarOptions, ...{events: this.events}};
        this.clickedEvent = null;
    }

    onEditClick() {
        this.view = 'edit';
    }

    reset() {

    }

    delete() {
        this.events = this.events.filter(i => i.id.toString() !== this.clickedEvent.id.toString());
        this.calendarOptions = {...this.calendarOptions, ...{events: this.events}};
        this.showDialog = false;
    }
}
