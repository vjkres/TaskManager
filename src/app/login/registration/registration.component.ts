import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  regForm = this.fb.group({
    userName: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])],
    password: [null, Validators.required],
    fullName: [null, Validators.required],
    email: [null, Validators.compose([Validators.required, Validators.email])],
    role: [null, Validators.required]
  });
  hide = true;
  roles = [{ name: 'Admin', code: 'ADMIN' }, { name: 'User', code: 'USER' }];
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
