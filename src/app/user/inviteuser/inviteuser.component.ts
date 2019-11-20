import { Component, OnInit, Inject, NgModule, Input } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-inviteuser',
  templateUrl: './inviteuser.component.html',
  styleUrls: ['./inviteuser.component.css']
})
export class InviteuserComponent implements OnInit {
  //
  data = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    fullName: [null, Validators.required],
    phone: [
      //
      null,
      Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12)])
    ]
  });
  error = '';
  constructor(
    //
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InviteuserComponent>
  ) {}

  closeWin(): void {
    this.dialogRef.close();
    /*
    const cn = confirm('Do you want to leave?');
    console.log(cn);
    if (cn) {
      this.dialogRef.close();
    }
    */
  }
  onOKClick(): void {
    const cn = confirm('Please confirm to invite');
    console.log(cn);
    if (cn) {
      console.log(this.data.value);
      this.dialogRef.close();
    } else {
      this.error = 'Some error occured';
    }
  }

  ngOnInit() {}
}
