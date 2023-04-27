import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddComic, DeleteComic } from './store/test.actions';

@Component({
  selector: 'app-ngrx-demo',
  templateUrl: './ngrx-demo.component.html',
  styleUrls: ['./ngrx-demo.component.css']
})
export class NgrxDemoComponent implements OnInit{
  //comics$: Observable<{comics: string[]}>;
  comics$: Observable<string[]>;

  // form
  comicForm = this.fb.group({
    name: [null, [Validators.required, Validators.maxLength(20)]]
  });

  constructor(
    private store: Store<{test: {comics: string[]}}>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // Co ciekawe według Maxa nie powinno się trzymać tego w zmiennej Subscription - aby uniknąć leaków pamięci i bugów.
    this.comics$ = this.store.select('test').pipe(map(result => result.comics))
  }

  onSubmit() {
    if(this.comicForm.valid) {
      const comicName = this.comicForm.value.name;
      this.store.dispatch(new AddComic(comicName));
    }
  }

  deleteComic(comic: string) {
    this.store.dispatch(new DeleteComic(comic));
  }
}
