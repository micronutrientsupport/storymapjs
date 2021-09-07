import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from 'src/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TableDialogComponent } from './dialogs/table-dialog/table-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    TableDialogComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
