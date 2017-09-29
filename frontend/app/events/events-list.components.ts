import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './share/event.model';

@Component({
    templateUrl: 'app/events/events-list.components.html'
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }
}
