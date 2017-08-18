import {Component} from "@angular/core";
import {AuthService} from "../user/auth.service";
import {ISession} from "../events/share/event.model";
import {EventService} from "../events/share/event.service";

@Component({
    selector:'nav-bar',
    templateUrl: 'app/nav/navbar.components.html',
    styleUrls: ['app/nav/navbar.components.css']
})
export class NavBarComponent {
    searchTerm: string = ""
    foundSessions: ISession[]

    constructor(private auth: AuthService, private eventService: EventService) {

    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(this.searchTerm).subscribe(sessions => {
            this.foundSessions = sessions
        })
    }
}