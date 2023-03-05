import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('that is working!'); // to będzie wyświetlanie po każdym requescie jaki wyślemy

    // jeżeli chcemy również coś robić po response musimy dodać również tego pipe'a
    return next.handle(request).pipe(
      tap(event => {
        if(event.type === HttpEventType.Response) {
          console.log('Response arrived');
        }
      })
    );
  }
}
