import { Injectable } from '@angular/core';
import { LocalDB } from '../utils/tmdata';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();

  constructor(private localDB: LocalDB) {
    this.messageSource.next([]);
  }

  getUsers = () => users;

  getResources = orgs => {
    if (orgs === 'general') {
      return users;
    } else {
      return ousers;
    }
  };
  getResourcesNew = orgs => {
    if (orgs === 'general') {
      return usersnew;
    } else {
      return usersnew;
    }
  };
}

const users = [
  //
  { email: 'admin@mail.com', password: 'admin', fullName: 'Admin' },
  { email: 'nuser@mail.com', password: 'nuser', fullName: 'User' }
];

const ousers = [
  //
  { email: 'admin1@mail.com', password: 'admin', fullName: 'Admin1' },
  { email: 'nuser1@mail.com', password: 'nuser', fullName: 'User1' }
];

const usersnew = [
  //
  { email: 'jatwin@mail.com', password: 'admin', fullName: 'Jatwin' }
];
