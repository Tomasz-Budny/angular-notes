import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tutorial-section',
  templateUrl: './tutorial-section.component.html',
  styleUrls: ['./tutorial-section.component.css']
})
export class TutorialSectionComponent {
  @Input() isVisible: boolean = false;
  @Input() nameOfSection: string = "";
}
