import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {ISession} from '../events/share/event.model';
import {EventService} from '../events/share/event.service';

@Component({
  selector: 'nav-bar',
  moduleId: module.id,
  templateUrl: 'navbar.components.html',
  styleUrls: ['navbar.components.css']
})
export class NavBarComponent {
    searchTerm: string = '';
    foundSessions: ISession[];

    constructor(public auth: AuthService, private eventService: EventService) {

    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
            this.foundSessions = sessions;
        });
    }
}
