import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

// Dyrektywa ta to przykład jak możemy wykorzystać databinding do modyfikowania naszych dyrektyw
@Directive({
  selector: '[appBindingAttr]'
})
export class BindingAttrDirective implements AfterViewInit {
  // to properta będzie dostępna na naszym obiekcie do którego przypiszemy naszą dyrektywę bindingAttr
  @Input() directiveProp: number = 10;

  // ta będzie dostępna bezpośrednio na naszej dyrektywie za pomocą prop bindingu
  @Input('appBindingAttr') color: string = 'purple'

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.color);

    // w ten sposób możemy wykorzystac renderer do modyfikowania DOM
    const text = this.renderer.createText(`${this.directiveProp}`);
    this.renderer.appendChild(this.elRef.nativeElement, text);
  }

  

}
