import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { displayPublic } from './display-public.pipe'
import { Truncate } from './truncate.pipe'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, displayPublic, Truncate],
  bootstrap: [AppComponent]
})
export class AppModule { }
