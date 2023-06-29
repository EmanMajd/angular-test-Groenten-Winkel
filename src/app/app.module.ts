import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { GroentenFormulierComponent } from './groenten-formulier/groenten-formulier.component';
import { WinkelkarComponent } from './winkelkar/winkelkar.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    GroentenFormulierComponent,
    WinkelkarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
