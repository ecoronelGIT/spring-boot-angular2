import {Routes} from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    EventResolver,
    EventsListResolver,
    EventSessionResolver
} from './events/index';
import {Error404Component} from './error/404.components';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
    {path: 'events/bySession/:id', component: EventDetailsComponent, resolve: {event: EventSessionResolver}},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];
