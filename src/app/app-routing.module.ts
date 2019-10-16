import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomedbComponent } from './home/homedb/homedb.component';
import { TaskdetailsComponent } from './task/taskdetails/taskdetails.component';
import { DrdpageComponent } from './home/drdpage/drdpage.component';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';

const routes: Routes = [
  //
  { path: '', component: HomedbComponent },
  { path: 'tasks', component: TaskdetailsComponent },
  { path: 'drd', component: DrdpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const RouteComponents = [
  //
  HomedbComponent,
  TaskdetailsComponent,
  DrdpageComponent,
  LoginComponent,
  RegistrationComponent
];
