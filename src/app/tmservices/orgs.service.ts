import { Injectable } from '@angular/core';
import { LocalDB } from '../utils/tmdata';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrgsService {
  //
  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();

  constructor(private localDB: LocalDB) {
    const orgs = this.getSelectedOrgs();
    this.messageSource.next(orgs);
  }

  getOrgs() {
    return orgsLinks;
  }

  getSelectedOrgs() {
    let orgs = this.localDB.getData('tm_sel_orgs');
    orgs = orgs ? orgs : 'general';
    return orgs;
  }

  saveSelectedOrgs(orgs) {
    this.localDB.storeData('tm_sel_orgs', orgs);
    this.messageSource.next(orgs);
  }
}

export interface Orgs {
  title: string;
  id: string;
  selected: boolean;
}

const orgsLinks: Orgs[] = [
  //
  { title: 'General', id: 'general', selected: true },
  { title: 'Personal', id: 'personal', selected: false },
  { title: 'Org2', id: 'org2', selected: false },
  { title: 'Org3', id: 'org3', selected: false },
  { title: 'Org4', id: 'org4', selected: false }
];
