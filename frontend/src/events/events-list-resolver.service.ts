import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {EventService} from './share/event.service';

@Injectable()
export class EventsListResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }

    resolve() {
        return this.eventService.getEvents();
    }
}
