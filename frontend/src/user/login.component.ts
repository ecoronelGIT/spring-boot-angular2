import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
  `]
})
export class LoginComponent {
    loginInvalid = false;
    mouseoverLogin = false;
    userName: string;
    password: string;

    constructor(private auth: AuthService, private router: Router) { }

    login(formValues: any) {
        this.auth.loginUser(formValues.userName, formValues.password).subscribe((resp) => {
          if (!resp) {
              this.loginInvalid = true;
          } else {
            this.router.navigate(['events']);
          }
        });
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
