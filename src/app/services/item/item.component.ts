import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnChanges {
  @Input() title: string;
  @Input() content: string;

  ngOnChanges(): void {
    this.title = this.title === '' ? 'default' : this.title;
    this.content = this.content === '' ? 'default' : this.content;
  }
  
}
