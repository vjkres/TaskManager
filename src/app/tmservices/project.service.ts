import { Injectable } from '@angular/core';
import { LocalDB } from '../utils/tmdata';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
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

  getProjects(sorgs) {
    //console.log('getProjects by ' + sorgs);
    if (sorgs === 'general') {
      return projects;
    } else {
      return oprojs;
    }
  }
  getNewProjects(sorgs) {
    //console.log('getProjects by ' + sorgs);
    if (sorgs === 'general') {
      return newProjects;
    } else {
      return newProjects;
    }
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

export interface Project {
  title: string;
  id: string;
  selected: boolean;
}

const projects: Project[] = [
  //
  { title: 'Project1', id: 'proj1', selected: false },
  { title: 'Project2', id: 'proj2', selected: false },
  { title: 'Project3', id: 'proj3', selected: true },
  { title: 'Project4', id: 'proj4', selected: false },
  { title: 'Project5', id: 'proj5', selected: false },
  { title: 'Project6', id: 'proj6', selected: false },
  { title: 'Project7', id: 'proj7', selected: false }
];
const newProjects: Project[] = [
  //
  { title: 'Project1', id: 'proj1', selected: true },
  { title: 'Project2', id: 'proj2', selected: false }
];
const oprojs: Project[] = [
  //
  { title: 'Project1', id: 'proj1', selected: true },
  { title: 'Project2', id: 'proj2', selected: false }
];
