import { Component } from '@angular/core';
//import { map } from 'rxjs/operators';
import { ProjectService } from 'src/app/tmservices/project.service';
import { UserService } from 'src/app/tmservices/user.service';
import { OrgsService } from 'src/app/tmservices/orgs.service';

@Component({
  selector: 'app-userdb',
  templateUrl: './userdb.component.html',
  styleUrls: ['./userdb.component.css']
})
export class UserdbComponent {
  //selected orgs
  sorgs = '';
  projects = [];
  resources = [];
  projectsnew = [];
  resourcesnew = [];

  constructor(
    //
    private projectService: ProjectService,
    private userService: UserService,
    private orgsService: OrgsService
  ) {
    orgsService.currentMessage.subscribe(obj => {
      console.log('Proj Subscribe = ', obj);
      this.sorgs = obj;
      this.populateData();
    });
  }

  populateData() {
    this.projects = this.projectService.getProjects(this.sorgs);
    this.projectsnew = this.projectService.getNewProjects(this.sorgs);
    //console.log('projects', this.projects);
    this.resources = this.userService.getResources(this.sorgs);
    this.resourcesnew = this.userService.getResourcesNew(this.sorgs);
    //console.log('resources', this.resources);
  }
}
