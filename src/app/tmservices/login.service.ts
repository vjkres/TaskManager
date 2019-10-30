import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalDB } from '../utils/tmdata';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();
  redirectUrl: string;
  constructor(private localDB: LocalDB, private userService: UserService) {
    this.messageSource.next(this.getLoggedInUser());
  }

  //
  isUserLoggedin = () => {
    const user = this.localDB.getUser();
    //console.log('user', user, user && user.isLoggedin === true);
    return user && user.isLoggedin === true;
  };

  getLoggedInUser = () => {
    const user = this.localDB.getUser();
    return user;
  };

  //
  doLogout = () => {
    this.localDB.removeUser();
    this.messageSource.next({});
  };

  //
  doLogin = login => {
    const respObj = { status: 0, error: 'User Name and Password not match' };
    if (login) {
      let users = this.userService.getUsers();
      const user = users.find(user => user.userName === login.userName);
      if (!user) {
        respObj.error = 'User Name not matched, Please register';
      } else if (user.password === login.password) {
        respObj.status = 1;
        const userObj = { userName: user.userName, fullName: user.fullName, isLoggedin: true };
        this.messageSource.next(userObj);
        this.localDB.storeUser(userObj);
      } else {
        respObj.error = 'password not matched, Please try again';
      }
    } else {
      respObj.error = 'Invalid parameters';
    }
    return respObj;
  };

  //
  sendEmail = form => {
    console.log('forgotupform', form);
    const respObj = { status: 1, message: 'Email sent, Please check' };
    return respObj;
  };
}
