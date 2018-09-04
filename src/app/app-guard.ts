import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import {ClockComponent} from './clock.component/clock.component';
import {YaClockComponent} from './ya-clock/ya-clock.component';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate, CanDeactivate<any>  {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canDeactivate(
    component: any,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
    if (component instanceof ClockComponent) 
       return component.canDeActivate();
    if (component instanceof YaClockComponent) 
       return true;
    // return component.dialogService.confirm('Discard changes?');
  }
}
