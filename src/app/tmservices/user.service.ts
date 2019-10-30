import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

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
  { userName: 'admin', password: 'admin', role: 'ADMIN', fullName: 'Admin' },
  { userName: 'nuser', password: 'nuser', role: 'USER', fullName: 'User' }
];

const ousers = [
  //
  { userName: 'admin1', password: 'admin', role: 'ADMIN', fullName: 'Admin1' },
  { userName: 'nuser1', password: 'nuser', role: 'USER', fullName: 'User1' }
];

const usersnew = [
  //
  { userName: 'jatwin', password: 'admin', role: 'ADMIN', fullName: 'Jatwin' }
];
