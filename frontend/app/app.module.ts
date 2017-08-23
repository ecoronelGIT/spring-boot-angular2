import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidator,
    EventsListResolver,
    EventResolver,
    EventSessionResolver
} from './events/index'
import {EventsAppComponent} from "./events-app.components";
import {NavBarComponent} from "./nav/navbar.components";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {Error404Component} from "./error/404.components";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CollapsibleWellComponent,
        JQ_TOKEN,
        SimpleModalComponent,
        ModalTriggerDirective} from "./common/index";
import {ToasterModule} from "angular2-toaster";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";

declare let jQuery: Object

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
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator
    ],
    providers:[
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

function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}