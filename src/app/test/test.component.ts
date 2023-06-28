import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  sectionIsVisible: boolean = true;

  // musimy zarejestrować serwis odpowiedzialny za zarządzanie layoutem
  constructor(private responsive: BreakpointObserver) {}

  // breakpoint to zwyczajny string z odpowiednim media query selectorem
  customBreakpoint: string = `(max-width: 900px)`;

  ngOnInit(): void {
    this.responsive.observe([
      this.customBreakpoint
      ])
      .subscribe(result => {
        this.sectionIsVisible = true;
        console.log("subscribe triggered");
        if (result.matches) {
          console.log("screens matches customBreakpoint");
          this.sectionIsVisible = false;
        }
    });
  }


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
