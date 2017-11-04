import './rxjs-extensions';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EventsAppComponent} from './events-app.components';
import {
  CreateEventComponent,
  CreateSessionComponent,
  DurationPipe,
  EventDetailsComponent,
  EventResolver,
  EventService,
  EventSessionResolver,
  EventsListComponent,
  EventsListResolver,
  EventThumbnailComponent,
  LocationValidator,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
} from './events/index';
import {NavBarComponent} from './nav/navbar.components';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './error/404.components';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  CollapsibleWellComponent,
  JQ_TOKEN,
  ModalTriggerDirective,
  SimpleModalComponent,
} from './common/index';
import {ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

let jQuery: Object = window['$'];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToasterModule
    ],
    declarations: [
      CollapsibleWellComponent,
      CreateEventComponent,
      CreateSessionComponent,
      DurationPipe,
      Error404Component,
      EventDetailsComponent,
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      LocationValidator,
      ModalTriggerDirective,
      NavBarComponent,
      SessionListComponent,
      SimpleModalComponent,
      UpvoteComponent,
    ],
    providers: [
        EventService,
        EventResolver,
        EventsListResolver,
        EventSessionResolver,
        VoterService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
        { provide: JQ_TOKEN, useValue: jQuery},
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}
