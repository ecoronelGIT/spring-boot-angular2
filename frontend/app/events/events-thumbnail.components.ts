import {Component, Input} from "@angular/core";
import {IEvent} from "./share/event.model";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/events-thumbnail.components.html',
    styles:[`
        .well div {color: #bbb;}
        .thumbnail {min-height: 210px;}
        .green{color: #003300 !important;}
        .bold{font-weight: bold;}
    `]
})
export class EventThumbnailComponent {
    @Input() event:IEvent

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time == '8:00 am'
        return {green: isEarlyStart, bold: isEarlyStart}
    }
}