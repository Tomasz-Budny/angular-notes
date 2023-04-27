import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comic, UpdatedComic } from '../comic.model';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {
  @Input() comic: Comic = null;
  @Input() index: number;

  @Output() delete = new EventEmitter<number>()
  @Output() update = new EventEmitter<UpdatedComic>()

  updateMode = false;
  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngAfterViewInit() {
    this.updateForm = this.fb.group({
      name: [this.comic.name, [Validators.required]],
      rate: [this.comic.rate, [Validators.required,                   
                               Validators.min(0),
                               Validators.max(5)]]
    })
  }

  deleteComic(index: number) {
    this.delete.emit(index);
  }

  updateComic() {
    if(this.updateForm.valid) {
      const comicName = this.updateForm.value.name;
      const comicRate = this.updateForm.value.rate;
      const comic = new Comic(comicName, comicRate);

      this.update.emit({index: this.index, comic: comic});
    }
  }
}
