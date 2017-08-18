import {Routes} from "@angular/router";
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent
} from './events/index'
import {Error404Component} from "./error/404.components";
import {EventResolver} from "./events/event-resolver.service";
import {EventsListResolver} from "./events/events-list-resolver.service";

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]