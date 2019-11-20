import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrgsService } from 'src/app/tmservices/orgs.service';

@Component({
  selector: 'app-orgmenu',
  templateUrl: './orgmenu.component.html',
  styleUrls: ['./orgmenu.component.css']
})
export class OrgmenuComponent implements OnInit {
  orgsLinks = [];
  @Output() message = new EventEmitter();
  //
  constructor(private orgsService: OrgsService) {
    this.orgsLinks = this.orgsService.getOrgs();
  }

  ngOnInit() {
    this.selectedOrgLink();
  }

  selectedOrgLink() {
    const obj = this.orgsService.getSelectedOrgs();
    this.orgsLinks.map(orgs => {
      orgs.selected = orgs.id === obj;
    });
    this.message.emit(obj);
  }

  changeORG(obj) {
    this.orgsService.saveSelectedOrgs(obj);
    this.selectedOrgLink();
    //console.log(' db=> ', obj);
  }
}
