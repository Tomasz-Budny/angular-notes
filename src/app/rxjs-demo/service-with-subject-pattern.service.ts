import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceWithSubjectPatternService {
  private objects$ = new BehaviorSubject<string[]>([]);

  getObjects() {
    return this.objects$.asObservable();
  }

  addObject(object: string) {
    this.objects$.next([...this.objects$.value, object]);
  }

  removeObject(objectToRemove: string) {
    this.objects$.next(
      [...this.objects$.value
        .filter(object => object !== objectToRemove)
      ]
    );
  }

}
