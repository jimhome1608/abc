import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, } from './/app-routing.module';
import { ClockComponent } from './clock.component/clock.component';
import { YaClockComponent } from './ya-clock/ya-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    YaClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
