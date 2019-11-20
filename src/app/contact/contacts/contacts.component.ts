import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ContactService } from 'src/app/tmservices/contact.service';
import { OrgsService } from 'src/app/tmservices/orgs.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  //
  sorgs = '';
  displayedColumns: string[] = ['select', 'id', 'title', 'phone', 'email', 'desc'];
  contacts = [];
  dataSource = new MatTableDataSource(this.contacts);
  selection = new SelectionModel(true, []);
  //
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  //
  sdata = { id: -1 };

  constructor(private contactService: ContactService, private orgsService: OrgsService) {
    /*
    orgsService.currentMessage.subscribe(obj => {
      console.log('Contact Subscribe = ', obj);
      this.sorgs = obj;
      this.contacts = this.contactService.getAllContacts();
      this.dataSource = new MatTableDataSource(this.contacts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    */
  }
  ngOnInit() {
    this.sorgs = this.orgsService.getSelectedOrgs();
    this.contacts = this.contactService.getAllContacts();
    this.dataSource = new MatTableDataSource(this.contacts);
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  rowClick = row => {
    console.log('Row==>', row);
    if (this.sdata.id && this.sdata.id === row.id) {
      this.sdata = { id: -1 };
    } else {
      this.sdata = row;
    }
  };
}
