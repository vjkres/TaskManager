import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomedbComponent } from './home/homedb/homedb.component';
import { TasksComponent } from './task/tasks/tasks.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { DrdpageComponent } from './home/drdpage/drdpage.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { ForgotupComponent } from './login/forgotup/forgotup.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { ProjectComponent } from './proj/project/project.component';
import { ProjectsComponent } from './proj/projects/projects.component';
import { UsersComponent } from './user/users/users.component';
import { UserComponent } from './user/user/user.component';
import { ContactsComponent } from './contact/contacts/contacts.component';
import { MenudbComponent } from './home/menudb/menudb.component';
import { MenudetailComponent } from './home/menudetail/menudetail.component';

const routes: Routes = [
  //
  { path: '', component: HomedbComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'addtask', component: AddTaskComponent, canActivate: [AuthGuard] },
  { path: 'edittask', component: EditTaskComponent, canActivate: [AuthGuard] },
  { path: 'drd', component: DrdpageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgotup', component: ForgotupComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:projid', component: ProjectComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:userid', component: UserComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'menudb', component: MenudbComponent },
  { path: 'menudetail', component: MenudetailComponent },

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
  TasksComponent,
  AddTaskComponent,
  EditTaskComponent,
  DrdpageComponent,
  LoginComponent,
  LogoutComponent,
  ForgotupComponent,
  RegistrationComponent,
  ProjectsComponent,
  ProjectComponent,
  UsersComponent,
  UserComponent,
  ContactsComponent,
  MenudbComponent,
  PageNotFoundComponent
];
