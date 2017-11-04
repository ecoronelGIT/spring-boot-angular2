import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {EventService} from './share/event.service';

@Injectable()
export class EventSessionResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEventBySessionId(route.params['id']);
    }
}
