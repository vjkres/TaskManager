import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../tmservices/login.service';

@Component({
  selector: 'app-forgotup',
  templateUrl: './forgotup.component.html',
  styleUrls: ['./forgotup.component.css']
})
export class ForgotupComponent implements OnInit {
  forgotupForm = this.fb.group({
    action: [
      //
      'password',
      Validators.required
    ],
    email: [
      //
      null,
      Validators.compose([Validators.required, Validators.email])
    ]
  });
  error = '';
  message = '';

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  onSubmit() {
    this.error = '';
    this.message = '';
    console.log('form valid', this.forgotupForm.valid);
    if (this.forgotupForm.valid) {
      const respObj = this.loginService.sendEmail(this.forgotupForm.value);
      console.log('respObj', respObj);
      if (respObj.status === 1) {
        this.message = respObj.message;
      }
    } else {
      this.error = 'Please enter valid vlaues';
    }
  }
}
