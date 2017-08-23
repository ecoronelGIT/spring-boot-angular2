import {EventEmitter, Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {IEvent, ISession} from "./event.model";
import {Headers, Http, RequestOptions, Response} from "@angular/http";

@Injectable()
export class EventService {

    constructor(private http: Http) { }

    getEvents():Observable<IEvent[]> {
        return this.http.get("http://localhost:8090/event/all").map((response: Response) => {
            let events = <IEvent[]>response.json()
            for(let i=0; i < events.length; i++) {
                events[i].date = new Date(events[i].date)
            }
            return <IEvent[]>response.json()
        }).catch(this.handleError)
    }

    getEvent(id:string): Observable<IEvent> {
        return this.http.get("http://localhost:8090/event/findById/" + id).map((response: Response) => {
            let event = <IEvent>response.json()
            event.date = new Date(event.date)
            return event
        }).catch(this.handleError)
    }

    getEventBySessionId(id:string):Observable<IEvent> {
      return this.http.get("http://localhost:8090/event/findEventBySessionId/" + id).map((response: Response) => {
        let event = <IEvent>response.json()
        event.date = new Date(event.date)
        return event
      }).catch(this.handleError)
    }

    saveEvent(event): Observable<IEvent> {
        event.date = new Date(event.date)
        let headers = new Headers({'Content-Type': 'application/json'})
        let options = new RequestOptions({headers: headers})
        return this.http.post("http://localhost:8090/event/save",JSON.stringify(event), options)
            .map((response: Response) => {
                return response
            }).catch(this.handleError)
    }

    updateEvent(event) {
        //let index = EVENTS.findIndex(x => x.id = event.id)
        //EVENTS[index] = event
    }

    searchSessions(searchTerm: string):Observable<ISession[]> {
      let term = searchTerm.toLocaleLowerCase();
      return this.http.get("http://localhost:8090/event/sessionByName/" + searchTerm)
        .map((response: Response) => {
          let sessions = <ISession[]>response.json()
          return sessions
        }).catch(this.handleError)
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }
}