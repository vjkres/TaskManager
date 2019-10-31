import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  regForm = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.required],
    fullName: [null, Validators.required],
    phone: [
      //
      null,
      Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12)])
    ]
  });
  hide = true;
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
