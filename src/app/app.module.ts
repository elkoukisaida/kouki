import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Partie1Component } from './partie1/partie1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Partie2Component } from './partie2/partie2.component';
import { Partie3Component } from './partie3/partie3.component';

@NgModule({
  declarations: [
    AppComponent,
    Partie1Component,
    Partie2Component,
    Partie3Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
