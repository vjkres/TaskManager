import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menudb',
  templateUrl: './menudb.component.html',
  styleUrls: ['./menudb.component.css']
})
export class MenudbComponent implements OnInit {
  //
  cards = [1, 2, 3, 4, 5, 6];

  constructor() {}

  ngOnInit() {}
}
