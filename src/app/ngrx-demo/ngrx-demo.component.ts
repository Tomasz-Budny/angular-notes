import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddComic, DeleteComic, UpdateComic } from './store/test.actions';
import { Comic, UpdatedComic } from './comic.model';

@Component({
  selector: 'app-ngrx-demo',
  templateUrl: './ngrx-demo.component.html',
  styleUrls: ['./ngrx-demo.component.css']
})
export class NgrxDemoComponent implements OnInit{
  //comics$: Observable<{comics: string[]}>;
  comics$: Observable<Comic[]>;

  // form
  comicForm = this.fb.group({
    name: [null, [Validators.required, Validators.maxLength(20)]],
    rate: [null, [Validators.required, 
                  Validators.min(0),
                  Validators.max(5)]],
    
  });

  constructor(
    private store: Store<{test: {comics: Comic[]}}>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // Co ciekawe według Maxa nie powinno się trzymać tego w zmiennej Subscription - aby uniknąć leaków pamięci i bugów.
    this.comics$ = this.store.select('test').pipe(map(result => result.comics))
  }

  onSubmit() {
    if(this.comicForm.valid) {
      const comicName = this.comicForm.value.name;
      const comicRate = this.comicForm.value.rate;
      const newComic = new Comic(comicName, comicRate);

      this.store.dispatch(new AddComic(newComic));
    }
  }

  deleteComic(index: number) {
    this.store.dispatch(new DeleteComic(index));
  }

  updateComic(updatedComic: UpdatedComic) {
    this.store.dispatch(new UpdateComic(updatedComic));
  }
}
