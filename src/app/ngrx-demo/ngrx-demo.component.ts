import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ngrx-demo',
  templateUrl: './ngrx-demo.component.html',
  styleUrls: ['./ngrx-demo.component.css']
})
export class NgrxDemoComponent implements OnInit{
  //comics$: Observable<{comics: string[]}>;
  comics$: Observable<string[]>;

  constructor(
    private store: Store<{test: {comics: string[]}}>
  ) {}

  ngOnInit() {
    // Co ciekawe według Maxa nie powinno się trzymać tego w zmiennej Subscription - aby uniknąć leaków pamięci i bugów.
    this.comics$ = this.store.select('test').pipe(map(result => result.comics))
  }
}
