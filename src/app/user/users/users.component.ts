import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UserService } from 'src/app/tmservices/user.service';
import { OrgsService } from 'src/app/tmservices/orgs.service';
import { MatDialog } from '@angular/material';
import { InviteuserComponent } from '../inviteuser/inviteuser.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //
  sorgs = '';
  sorgsName = '';
  users = [];
  sdata = '';
  gsdata = '';
  otodo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  odene = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  todo = this.otodo;
  done = this.odene;
  //
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let data = event.previousContainer.data[event.previousIndex];
      let index = event.container.data.findIndex(obj => obj === data);
      if (index < 0) {
        event.container.data.splice(event.currentIndex, 0, data);
      }
    }
  }

  populateData() {
    const orgsLink = this.orgsService.getOrgs();
    orgsLink.forEach(orgs => {
      if (orgs.id === this.sorgs) {
        this.sorgsName = orgs.title;
      }
    });
    this.users = this.userService.getResources(this.sorgs);
  }

  inviteUser() {
    const dialogRef = this.dialog.open(InviteuserComponent, {
      width: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  inviteUser1() {
    const dindex = this.done.findIndex(obj => obj === 'Jatwin');
    if (dindex < 0) {
      this.done.unshift('Jatwin');
    }
    const tindex = this.todo.findIndex(obj => obj === 'Jatwin');
    if (tindex < 0) {
      this.todo.unshift('Jatwin');
    }
  }

  donefilterEvent(donefilter) {
    console.log('donefval', donefilter);
    const val = donefilter.toLowerCase();
    this.done = this.odene.filter(d => d.toLowerCase().includes(val));
  }

  selectRow(obj) {
    //console.log('==>', obj);
    if (this.sdata === obj) {
      this.sdata = '';
    } else {
      this.sdata = obj;
    }
  }

  selectGeneralRow(obj) {
    //console.log('==>', obj);
    if (this.gsdata === obj) {
      this.gsdata = '';
    } else {
      this.gsdata = obj;
    }
  }

  userDetail() {
    if (this.sdata === '') {
      alert('Please select a user');
    } else {
      console.log('userDetail ', this.sdata);
    }
  }

  constructor(
    //
    private userService: UserService,
    private orgsService: OrgsService,
    public dialog: MatDialog
  ) {
    this.orgsService.currentMessage.subscribe(obj => {
      console.log('Proj Subscribe = ', obj);
      this.sorgs = obj;
      this.populateData();
    });
  }

  ngOnInit() {}
}
