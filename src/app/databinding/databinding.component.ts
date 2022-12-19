import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  // pozwala nadpisywać naszą zmienną za pomocą databindingu atrybut pod nazwą zmiennej albo tej jaką ustawimy w input będzie dostępny na elemencie naszego komponentu i możemy go nadpisywać 
  @Input() inputProp: string = "test";

  // pozwala nam to tworzyć customowe eventy do któych możemy potem przypisywać metody. podobnie jak przy prop event ten jest dostępny na elemencie naszego komponentu.
  @Output() outputProp = new EventEmitter<string>();

  // element zostanie wyemitowany po wywołaniu metody .emit(arg)
  // arg - ciało naszego eventu to co przekazujemy z nim, musi być typu jaki określiliśmy w konstr. generycznym
  onSomeEvent() {
    this.outputProp.emit("event message");
  }


  data: string = "{{ data }}";
  testNgModel: string = "";

  changeColor(event: MouseEvent) {
    console.log(event.target);
  }

  localRefTest(local: HTMLDivElement) {
    console.log(local);
    local.innerText = "Po naciśnieciu jest inny"; // nie powinno się w ten sposób zmieniać DOMu w angular
  }
}
