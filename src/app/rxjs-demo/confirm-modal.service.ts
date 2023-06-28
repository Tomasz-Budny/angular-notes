import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {

  constructor() { }

  public confirm = new Subject<boolean>();
  
  reject() {
    this.confirm.next(false);
  }

  approve() {
    this.confirm.next(true);
  }

  getResponse() {
    return this.confirm.asObservable();
  }
}
