import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner-test',
  templateUrl: './inner-test.component.html',
  styleUrls: ['./inner-test.component.css']
})
export class InnerTestComponent {
  @Input() title: string; 

  ngOnInit() {
    console.log('on init');
  }
}
