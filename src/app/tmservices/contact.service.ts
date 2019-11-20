import { Injectable } from '@angular/core';
import { LocalDB } from '../utils/tmdata';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();

  constructor(private localDB: LocalDB) {
    this.messageSource.next([]);
  }

  getAllContacts() {
    return contacts;
  }
}

export interface Contact {
  title: string;
  id: string;
  phone: string;
  email: string;
  selected: boolean;
}

const contacts: Contact[] = [
  //
  { title: 'Jatwin KV', id: '1', phone: '1234567890', email: 'email@mail.com', selected: false },
  { title: 'Vijay KV', id: '2', phone: '1234567890', email: 'email@mail.com', selected: false },
  { title: 'Venkat K', id: '3', phone: '1234567890', email: 'email@mail.com', selected: true },
  { title: 'Lakshmi K', id: '4', phone: '1234567890', email: 'email@mail.com', selected: false },
  { title: 'Raj', id: '5', phone: '1234567890', email: 'email@mail.com', selected: false },
  { title: 'Kajol', id: '6', phone: '1234567890', email: 'email@mail.com', selected: false },
  { title: 'Tena', id: '7', phone: '1234567890', email: 'email@mail.com', selected: false }
];
