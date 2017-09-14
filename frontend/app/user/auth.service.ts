import {Injectable} from "@angular/core";
import {IAuthenticationRequest, IUser} from "./user.model";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
    currentUser: IUser
    currentToken: string

  constructor(private http: Http) { }

    loginUser(userName: string, password: string) {
      /*let headers = new Headers({
        'Authorization': 'Basic ' + btoa(userName + ':' + password),
        'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
      });*/

      let headers = new Headers({'Content-Type': 'application/json'})
      let options = new RequestOptions({headers: headers})
      let authenticationRequest:IAuthenticationRequest = {username: userName, password: password}

      return this.http.post('http://localhost:8090/auth/login', JSON.stringify(authenticationRequest), options).do( resp => {
        if(resp) {
          this.currentUser = <IUser> resp.json().user
          this.currentToken = resp.json().token
        }
      }).catch(error => {
          return Observable.of(false)
      })
    }

    updateCurrentUser(firstName:string, lastName:string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

    isAuthenticated() {
        return !! this.currentUser;
    }
}