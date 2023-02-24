import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  testDate: Date = new Date();
  testCustomPipe1: string = 'Pismo napisane w stylu pokemon';
  testCustomPipe2: string = 'Możemy również tworzyć sparametryzowane pipes.';
  services: Service[] = [
    new Service('TV', 'LG Smart TV'),
    new Service('Internet', 'kabel RJ45'),
    new Service('Internet', 'modem WiFi'),
    new Service('TV', 'Telewizor z dupą'),
    new Service('TV', 'Panasonic')];
  category: string = '';
  asyncPipeTestPromise = new Promise((resolve, reject) => {
    setInterval(() => {
      resolve('Po dwóch sekundach wyświetli się ten napis. Implementacja ta używa Promise.')
    }, 2000);
  });
  asyncPipeTestObservable = new Observable(observer => {
    setInterval(() => {
      observer.next('Po trzech sekundach wyświetli się ten napis. Implementacja ta używa Observable. Pipe async automatycznie subskrybuje taki observable')
    }, 3000)
  });
  asyncPipeTestObservableObject = new Observable<Service>(observer => {
    setInterval(() => {
      observer.next(new Service('TV', 'ta implementacja działa na obiekcie i wyświetla jego pole'))
    }, 3000)
  });

}

export class Service {
  constructor(
    public category: string,
    public name: string
  ) {}
}
