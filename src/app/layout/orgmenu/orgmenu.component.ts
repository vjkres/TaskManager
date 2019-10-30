import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProjectService } from 'src/app/tmservices/project.service';

@Component({
  selector: 'app-orgmenu',
  templateUrl: './orgmenu.component.html',
  styleUrls: ['./orgmenu.component.css']
})
export class OrgmenuComponent implements OnInit {
  orgsLinks = [];
  @Output() message = new EventEmitter();
  //
  constructor(private projectService: ProjectService) {
    this.orgsLinks = this.projectService.getOrgs();
  }

  ngOnInit() {
    this.selectedOrgLink();
  }

  selectedOrgLink() {
    const obj = this.projectService.getSelectedOrgs();
    this.orgsLinks.map(orgs => {
      orgs.selected = orgs.id === obj;
    });
    this.message.emit(obj);
  }

  changeORG(obj) {
    this.projectService.saveSelectedOrgs(obj);
    this.selectedOrgLink();
    //console.log(' db=> ', obj);
  }
}
