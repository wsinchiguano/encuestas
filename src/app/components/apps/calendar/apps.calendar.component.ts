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

    clickedEvent: EventApi;

    dateClicked: boolean;

    edit: boolean = false;

    tags: any[];

    view: string;

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
            eventClick: this.onEventClick.bind(this),
            select: this.onDateSelect.bind(this)
        };

    }

    onEventClick(arg) {
        this.view = 'display';
        this.showDialog = true;
        this.clickedEvent = arg.event.toPlainObject({collapseExtendedProps: true, collapseColor: true});
        console.log(this.clickedEvent)
    }

    onDateSelect(arg) {
        this.view = 'new'
        this.showDialog = true;
        this.clickedEvent = {...arg, title: null, description: null, location: null, backgroundColor: null, borderColor: null, textColor: null, tag: {color: null, name: null}}
    }

    handleSave() {
        this.showDialog = false;
        console.log('save event')
    }

    onEditClick() {
        this.view = 'edit';

    }

    reset() {

    }

    delete() {
      
    }

    closeDialog() {
        this.showDialog = false;
        this.dateClicked = false;
        this.edit = false;
        this.view = null;
    }
}
