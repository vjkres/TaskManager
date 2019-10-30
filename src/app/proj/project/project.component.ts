import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/tmservices/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projid = '';
  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit() {
    this.projid = this.route.snapshot.paramMap.get('projid');
  }
}
