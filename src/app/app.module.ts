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
import { LoginService } from './tmservices/login.service';
import { LocalDB } from './utils/tmdata';

@NgModule({
  declarations: [
    //
    AppComponent,
    TmnavComponent,
    RouteComponents
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
  providers: [LoginService, LocalDB],
  bootstrap: [AppComponent]
})
export class AppModule {}
