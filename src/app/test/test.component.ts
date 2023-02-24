import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  subscribers: Test[] = [new Test('Tom 1'), new Test('Tom 2'), new Test('Tom 3')];

  changeValue() {
    this.subscribers = [new Test('Bart 1'), new Test('Bart 2'), new Test('Bart 3')];
  }
  
}

class Test {
  constructor(
    public name: string
  ) {}
}
