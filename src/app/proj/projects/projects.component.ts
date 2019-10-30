import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/tmservices/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  sorgs = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.sorgs = this.projectService.getSelectedOrgs();
  }

  onMessage(obj) {
    //console.log('Obj=>', obj);
    this.sorgs = obj;
  }
}
