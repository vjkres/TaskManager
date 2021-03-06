import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { UserService } from 'src/app/tmservices/user.service';
import { OrgsService } from 'src/app/tmservices/orgs.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sorgs = '';
  displayedColumns: string[] = ['select', 'userName', 'fullName'];
  projects = [];
  dataSource = new MatTableDataSource(this.projects);
  selection = new SelectionModel(true, []);
  //
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  //
  sdata = { userName: -1 };

  constructor(private userService: UserService, private orgsService: OrgsService) {
    orgsService.currentMessage.subscribe(obj => {
      console.log('Proj Subscribe = ', obj);
      this.sorgs = obj;
      this.projects = this.userService.getResources(this.sorgs);
      this.dataSource = new MatTableDataSource(this.projects);
    });
  }

  ngOnInit() {
    this.sorgs = this.orgsService.getSelectedOrgs();
    this.projects = this.userService.getResources(this.sorgs);
    this.dataSource = new MatTableDataSource(this.projects);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.userName + 1}`;
  }

  rowClick = row => {
    //console.log('Row==>', row);
    if (this.sdata.userName && this.sdata.userName === row.userName) {
      this.sdata = { userName: -1 };
    } else {
      this.sdata = row;
    }
  };
}
