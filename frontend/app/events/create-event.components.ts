import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {EventService} from "./share/index";

@Component({
    templateUrl:'app/events/crate-event.components.html',
    styles:[`
        em {float: right; color: #E05C65; padding-left: 10px;}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder { color: #999;}
        .error ::-moz-placeholder { color: #999}
        .error :-moz-placeholder { color: #999}
        .error :ms-input-placeholder {color: #999}
    `]

})
export class CreateEventComponent implements OnInit {
    isDirty:Boolean = true
    event: any = {location: {}}

    constructor(private router: Router, private eventService: EventService) {

    }

    ngOnInit() {
        /*this.event = {
            name: 'Ng Spectacular',
            date: new Date('8/8/2028'),
            time: '10 am',
            price: 799.99,
            location: {
                address: '456 Happy St',
                city: 'Felicity',
                country: 'Angularistan'
            },
            onlineUrl: 'http://ngSpectacular.com',
            imageUrl: 'http://ngSpectacular.com/logo.png'
        }*/
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(response => {
            this.isDirty = false
            this.router.navigateByUrl('/events')
        })
    }

    cancel() {
        this.router.navigateByUrl('/events')
    }
}
