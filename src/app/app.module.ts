import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GemComponent } from './components/gem/gem.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
