import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../tmservices/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [
      //
      null,
      Validators.compose([Validators.required, Validators.email])
    ],
    password: [
      //
      null,
      Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])
    ],
    rememberMe: []
  });

  error = '';
  hide = true;
  ngOnInit() {
    if (this.loginService.isUserLoggedin()) {
      this.router.navigateByUrl('/');
    }
  }
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {}

  onSubmit() {
    this.error = '';
    if (this.loginForm.valid) {
      const respObj = this.loginService.doLogin(this.loginForm.value);
      if (respObj.status === 0) {
        this.error = respObj.error;
      } else if (respObj.status === 1) {
        let url = this.loginService.redirectUrl;
        console.log('URL:' + url);
        url = url && url !== undefined ? url : '/';
        console.log('URL:' + url);
        url = url !== '/login' ? url : '/';
        this.router.navigateByUrl(url);
      }
    } else {
      this.error = 'Please enter valid values';
    }
  }
}
