import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './core/app.component';
import { AppRoutingModule, } from './/app-routing.module';
import { ClockComponent } from './components/clock.component/clock.component';
import { YaClockComponent } from './components/ya-clock/ya-clock.component';

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
