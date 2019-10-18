import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../../tmservices/login.service';
import { startWith, tap, delay } from 'rxjs/operators';
@Component({
  selector: 'app-tmnav',
  templateUrl: './tmnav.component.html',
  styleUrls: ['./tmnav.component.css']
})
export class TmnavComponent implements OnInit {
  //
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );
  isLoggedIn = false;
  welcomestr = 'Welcome Guest';
  menuLinks = [
    //
    { title: 'Home', url: '', selected: false },
    { title: 'Tasks', url: '/tasks', selected: false },
    { title: 'DRD', url: '/drd', selected: false }
  ];
  constructor(private breakpointObserver: BreakpointObserver, private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.currentMessage
      .pipe(
        startWith(null),
        delay(0),
        tap(user => this.loginCallback(user))
      )
      .subscribe();
  }

  loginCallback = user => {
    //console.log('nav=>', user);
    if (user && user.fullName) {
      this.welcomestr = 'Welcome ' + user.fullName;
      this.isLoggedIn = true;
    } else {
      this.welcomestr = 'Welcome Guest';
      this.isLoggedIn = false;
    }
  };

  selectedLink = slink => {
    this.menuLinks.forEach(link => {
      link.selected = link.url === slink;
    });
  };
}
