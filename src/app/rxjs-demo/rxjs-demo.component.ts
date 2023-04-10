import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, combineLatest, interval } from 'rxjs';
import {  map, scan, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {

  subjectTest = new Subject();
  behaviorSubject = new BehaviorSubject(0); // BehaviorSubject musi mieć inital value

  combineLatestDemo = combineLatest([
    interval(3000).pipe(take(3), map(x => 'A' + x)),
    interval(4000).pipe(take(3), map(x => 'B' + x)),
    interval(1500).pipe(take(3), map(x => 'C' + x))
  ])
    .pipe(
      map(([x1, x2, x3]) =>  x1+' '+x2+' '+ x3),
      scan((acc, curr) => [...acc, curr], []) // Działa podobnie do reduce w js. W tym wypadku tworzy tablicę ze wszystkimi wartościami wyemitowanymi przez ten observable
  );

  ngOnInit() {
    this.subjectTest.next(0);

    setInterval(() => {
      let rand = Math.round(Math.random() * 100);
      this.subjectTest.next(rand);
      this.behaviorSubject.next(rand);
    }, 2000);
  }

  onBehaviorSubjectTest() {
    // Ciekawsze testy pokazujące działanie behaviorSubject
    console.log('#### BehaviorSubjectTest ####');
    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(3);

    // Logs
    // observerA: 0
    // observerA: 1
    // observerA: 2
    // observerB: 2
    // observerA: 3
    // observerB: 3
    console.log('#### END ####');
  }

  onReplaySubjectTest() {
    console.log('#### ReplaySubject ####');
    const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(5);

    // Logs:
    // observerA: 1
    // observerA: 2
    // observerA: 3
    // observerA: 4
    // observerB: 2
    // observerB: 3
    // observerB: 4
    // observerA: 5
    // observerB: 5
    console.log('#### END ####');
  }

  onAsyncSubjectTest() {
    console.log('#### AsyncSubject ####');
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(5);
    subject.complete();

    // Logs:
    // observerA: 5
    // observerB: 5
    console.log('#### END ####');
  }
}
