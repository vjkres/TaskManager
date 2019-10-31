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
    this.messageSource.next([]);
  }

  getAllProjects(sorgs) {
    if (sorgs === 'general') {
      return projects;
    } else {
      return oprojs;
    }
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
