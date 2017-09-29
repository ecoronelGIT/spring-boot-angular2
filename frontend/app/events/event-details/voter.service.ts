import {Injectable} from '@angular/core';
import {ISession} from '../share/event.model';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VoterService {

    constructor(private http: Http) {}

    deleteVoter(session: ISession, voterName: string) {
      session.voters = session.voters.filter(voter => voter !== voterName);

      const url = `http://localhost:8090/event/session/voters/${session.id}/${voterName}`;
      this.http.delete(url).catch(this.handleError).subscribe();
    }

    addVoter(session: ISession, voterName: string) {
      session.voters.push(voterName);
      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({headers: headers});

      const url = `http://localhost:8090/event/session/voters/${session.id}/${voterName}`;
      this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(voter => voter === voterName);
    }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
