import {Component, OnInit} from '@angular/core';
import {EventService} from '../share/event.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IEvent, ISession} from '../share/event.model';

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles : [`
        .container {padding-left: 20px; padding-right: 20px;}
        .event-image {height: 100px}
        a {cursor: pointer;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.eventService.updateEvent(this.event.id, session).subscribe(response => {
          this.addMode = false;
          this.router.navigateByUrl('/events/' + this.event.id );
        });
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
