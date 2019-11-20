import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TmnavComponent } from './layout/tmnav/tmnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserdbComponent } from './home/userdb/userdb.component';
import { AdmindbComponent } from './home/admindb/admindb.component';
//services
import { LocalDB } from './utils/tmdata';
import { LoginService } from './tmservices/login.service';
import { UserService } from './tmservices/user.service';
import { ProjectService } from './tmservices/project.service';
import { TaskService } from './tmservices/task.service';
import { OrgmenuComponent } from './layout/orgmenu/orgmenu.component';
import { OrgsService } from './tmservices/orgs.service';
import { InviteuserComponent } from './user/inviteuser/inviteuser.component';
@NgModule({
  declarations: [
    //
    AppComponent,
    TmnavComponent,
    RouteComponents,
    UserdbComponent,
    AdmindbComponent,
    OrgmenuComponent,
    InviteuserComponent
  ],
  imports: [
    //
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    DragDropModule,
    FormsModule
  ],
  entryComponents: [InviteuserComponent],
  providers: [LocalDB, OrgsService, LoginService, UserService, ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
