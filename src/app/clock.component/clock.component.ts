import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'ClockComponent',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  private clock: Observable<number>;
  private seconds: number;
  private deactivate_status;

  ngOnInit() {
    // creates instance of observable clock which can be subscribed too
    this.clock = new Observable(observer => {
      setInterval(() => {
        let newDate = new Date();
        observer.next(newDate.getSeconds());
      }, 1000);
    });

    // creates subscription to observable clock
    const clockSubscription = this.clock.subscribe(
      secs => {
        this.seconds = secs;
        this.deactivate_status = (this.seconds >= 30);
        if (this.seconds === 45 ) {
          clockSubscription.unsubscribe();
        };
      });
  }

  deactivate_status_string() {
    if (this.deactivate_status)
      return 'Yes<br />you can navigate off this page<br />The Button will work';
    else
      return 'No<br />you cannot navigate off this page until seconds >= 30<br />The Button will not do anything';
  }

  deactivate_status_class() {
    if (this.deactivate_status)
      return 'yes';
    else
      return 'no';
  }


  // method referenced by app-guard to determine if can leave or not
  canDeActivate(): Observable<boolean> | boolean {
    return of(this.deactivate_status);
  }

}
