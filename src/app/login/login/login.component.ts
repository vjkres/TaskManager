import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    userName: [
      //
      null,
      Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])
    ],
    password: [
      //
      null,
      Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])
    ],
    rememberMe: []
  });

  ngOnInit() {}
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!' + this.loginForm.valid);
  }
}
