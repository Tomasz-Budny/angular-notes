import { Component } from '@angular/core';
import { BasicService } from './basic.service';
import { ItemsService } from './items.service';

// SERWISY POWINNIŚMY PRZEKAZYWAĆ TYLKO PRZEZ DI
// nazywany również hierarchila injector

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [BasicService, ItemsService] // w providers wprowadzamy klasę która ma zostac zajerestrowana przez nasz kontener DI 
})
export class ServicesComponent {

  items: {title: string, content: string}[] = [];

  constructor(private basicService: BasicService, private itemsService: ItemsService) {
    this.items = this.itemsService.items;
  }

  onClick() {
    this.basicService.displayWarning('Service working!');
  }
}
