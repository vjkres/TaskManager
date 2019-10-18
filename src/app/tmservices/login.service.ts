import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();
  isLoggedin = false;
  redirectUrl: string;
  constructor() {}

  doLogout = () => {
    this.isLoggedin = false;
    this.messageSource.next({});
  };
  doLogin = login => {
    let respObj = { status: 0, error: 'User Name and Password not match' };
    if (login) {
      let user = users.find(user => user.userName === login.userName);
      if (!user) {
        respObj.error = 'User Name not matched, Please register';
      } else if (user.password === login.password) {
        respObj.status = 1;
        this.isLoggedin = true;
        let userObj = { userName: user.userName, fullName: user.fullName };
        this.messageSource.next(userObj);
      } else {
        respObj.error = 'password not matched, Please try again';
      }
    } else {
      respObj.error = 'Invalid parameters';
    }
    return respObj;
  };

  sendEmail = form => {
    console.log('forgotupform', form);
    const respObj = { status: 1, message: 'Email sent, Please check' };
    return respObj;
  };
}

const users = [
  //
  { userName: 'admin', password: 'admin', role: 'ADMIN', fullName: 'Admin' },
  { userName: 'nuser', password: 'nuser', role: 'USER', fullName: 'User' }
];
