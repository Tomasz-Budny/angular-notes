import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy{
  timer1: number = 0;
  private intervalSubscription: Subscription;

  //custom interval
  timer2: number = 0
  private customIntervalSubscription: Subscription;

  ngOnInit(): void {
    // wbudowane interval
    this.intervalSubscription = interval(1000).subscribe(count => {
      this.timer1 = count;
    })

    // customowy interval
    const customIntervalObservable = new Observable((observer: Observer<number>)  => {
      let custTimer: number = 0;
      setInterval(() => {
        observer.next(custTimer);
        custTimer++;
      }, 1000)
    })

    // aby zadziałał musimy zasubskrybować (w przeciwieństwie do Promise które odrazu działa)
    this.customIntervalSubscription = customIntervalObservable.subscribe(count => {
      this.timer2 = count;
    });
  }

  ngOnDestroy(): void {
    // wbudowane interval
    this.intervalSubscription.unsubscribe()

    // customowe interval
    this.customIntervalSubscription.unsubscribe();
  }

  // Operators - przykład działania

  message$: Observable<string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  resend() {
    this.message$ = this.getResendObservable();
  }
  // nie rozumiem tego do końca 
  private getResendObservable() {
    return interval(500).pipe(map(i => this.messages[i]), take(this.messages.length))
  }


  // Tworzenie custom observables
  // PRZYKŁAD NIE DZIAŁA ALE ZOSTAWIAM BO I TAK MA SPORO INFO
  // zmienna do full observable
  timer3: number = 0;
  fullObservable = new Observable((observer: Observer<number>) => {
    let count = 0;
    setInterval(() => {
      // będzie się wykonywało dopóki nie wyrzuci błędu albo nie zostanie ukończone
      observer.next(count);

      // completer nie potrzebuje niczego w parametrach
      if(count > 5) {
        observer.complete();
      }

      // w argumentach error możemy podać wyjątek jaki zgłosi
      if(count > 6) {
        observer.error(new Error('o cholibka!'))
      }

    }, 1000);
  });

  onObserverTest() {
    this.fullObservable.subscribe(count => {
      // jak zachować sie w zwyczajnej wymianie info
      this.timer3 = count;
    },
    // co zrobić w przypadku błędu
     error => {
      alert(error)
    },
    // ostatni argument to jest co powinien zrobić po complete
     () => {
      alert('process complete');
    }
    )
  }

}
