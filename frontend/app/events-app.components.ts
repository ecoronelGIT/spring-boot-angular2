import {Component} from "@angular/core";

@Component({
    selector : 'events-app',
    template : `
        <toaster-container></toaster-container>
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})
export class EventsAppComponent {

}