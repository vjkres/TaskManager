import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TmnavComponent } from './layout/tmnav/tmnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { UserdbComponent } from './home/userdb/userdb.component';
import { AdmindbComponent } from './home/admindb/admindb.component';
//services
import { LocalDB } from './utils/tmdata';
import { LoginService } from './tmservices/login.service';
import { UserService } from './tmservices/user.service';
import { ProjectService } from './tmservices/project.service';
import { TaskService } from './tmservices/task.service';
import { OrgmenuComponent } from './layout/orgmenu/orgmenu.component';

@NgModule({
  declarations: [
    //
    AppComponent,
    TmnavComponent,
    RouteComponents,
    UserdbComponent,
    AdmindbComponent,
    OrgmenuComponent
  ],
  imports: [
    //
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    DragDropModule
  ],
  providers: [LocalDB, LoginService, UserService, ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
