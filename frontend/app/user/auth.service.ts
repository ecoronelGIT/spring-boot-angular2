import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
    currentUser: IUser

  constructor(private http: Http) { }

    loginUser(userName: string, password: string) {
      /*let headers = new Headers({
        'Authorization': 'Basic ' + btoa(userName + ':' + password),
        'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
      });*/

      let headers = new Headers({'Content-Type': 'application/json'})
      let options = new RequestOptions({headers: headers})
      let loginInfo = {username: userName, password: password}

      return this.http.post('http://localhost:8090/login', JSON.stringify({loginInfo}), options).do( resp => {
        if(resp) {
            this.currentUser = <IUser> resp.json().user
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