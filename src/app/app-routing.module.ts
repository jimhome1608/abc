import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './core/app.component';
import { ClockComponent } from './clock.component/clock.component';
import { YaClockComponent } from './ya-clock/ya-clock.component';
import { AppGuardGuard } from './app-guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ClockComponent,
    data: {
      redirectTo: '/clock'
    }
  },
  {
    path: 'clock',
    component: ClockComponent,
    canDeactivate: [
      AppGuardGuard
    ],
    canActivate: [
      AppGuardGuard
    ],
  },
  {
    path: 'ya_clock',
    component: YaClockComponent,
    canDeactivate: [
      AppGuardGuard
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [
    AppGuardGuard
  ]
})
export class AppRoutingModule { }
