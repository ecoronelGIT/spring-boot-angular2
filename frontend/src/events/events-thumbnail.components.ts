import {Component, Input} from "@angular/core";
import {IEvent} from "./share/event.model";

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'events-thumbnail.components.html',
  styleUrls:['events-thumbnail.components.css']
})
export class EventThumbnailComponent {
    @Input() event:IEvent

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time == '8:00 am'
        return {green: isEarlyStart, bold: isEarlyStart}
    }
}