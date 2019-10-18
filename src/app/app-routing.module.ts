import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomedbComponent } from './home/homedb/homedb.component';
import { TaskdetailsComponent } from './task/taskdetails/taskdetails.component';
import { DrdpageComponent } from './home/drdpage/drdpage.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { ForgotupComponent } from './login/forgotup/forgotup.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  //
  { path: '', component: HomedbComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TaskdetailsComponent, canActivate: [AuthGuard] },
  { path: 'drd', component: DrdpageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgotup', component: ForgotupComponent },
  { path: 'registration', component: RegistrationComponent },

  //should be last one
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const RouteComponents = [
  //
  HomedbComponent,
  TaskdetailsComponent,
  DrdpageComponent,
  LoginComponent,
  LogoutComponent,
  ForgotupComponent,
  RegistrationComponent,
  PageNotFoundComponent
];
