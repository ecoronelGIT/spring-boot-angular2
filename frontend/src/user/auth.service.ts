import {Injectable} from '@angular/core';
import {IAuthenticationRequest, IUser} from './user.model';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
    currentUser: IUser;
    currentToken: string;

  constructor(private http: Http) { }

    loginUser(userName: string, password: string) {
      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({headers: headers});
      const authenticationRequest: IAuthenticationRequest = {username: userName, password: password};

      return this.http.post('http://localhost:8090/auth/login', JSON.stringify(authenticationRequest), options)
        .do( resp => {
          if (resp) {
            this.currentUser = <IUser> resp.json().user;
            this.currentToken = resp.json().token;
          }
        }).catch(error => {
            return Observable.of(false);
        });
    }

    updateCurrentUser(firstName: string, lastName: string) {
      /*let headers = new Headers({
        'Authorization': 'Basic ' + btoa(userName + ':' + password),
        'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
      });*/
      this.currentUser.firstName = firstName;
      this.currentUser.lastName = lastName;

      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({headers: headers});
      return this.http.put('http://localhost:8090/user/update', JSON.stringify(this.currentUser), options);
    }

    checkAuthenticationStatus() {
      return this.http.get('http://localhost:8090/user/current').map((response: any) => {
        if (response._body) {
          return response.json();
        } else {
          return {};
        }
      }).do(currentUser => {
        if (!!currentUser.userName) {
          this.currentUser = currentUser;
        }
      }).subscribe();
    }

    logout() {
      this.currentUser = undefined;
      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({headers: headers});
      return this.http.post('http://localhost:8090/auth/logout', JSON.stringify({}), options);
    }

    isAuthenticated() {
        return !! this.currentUser;
    }
}
