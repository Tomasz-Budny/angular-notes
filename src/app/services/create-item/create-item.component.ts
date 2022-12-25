import { Component } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {

  constructor(private itemsService: ItemsService) {}

  onItemCreated(title: string, content: string) {
    this.itemsService.addNewItem(title, content);
  }
}
