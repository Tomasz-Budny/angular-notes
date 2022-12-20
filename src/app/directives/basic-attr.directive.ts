import { Directive, ElementRef, OnInit } from '@angular/core';

// nową dyrektywę tworzymy za pomocą komendy ng g d [nazwa]

// aby klasa była rozumiana jako dyrektywa musi mieć dekorator @Directive() i w parametrach podać obiekt z kluczem selector
@Directive({
  selector: '[appBasicAttr]' // nawiasy są po to aby selektor dotyczył atrybutów, podobnie jak w css.
})
export class BasicAttrDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit()  {
    // nie jest to dobra praktyka dostawanie się do DOMu w taki sposób
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
