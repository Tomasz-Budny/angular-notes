import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInteractiveAttr]'
})
export class InteractiveAttrDirective {
  // pozwala ustawić w łatwy sposób atrybut/DOM elementu na który nałożymy naszą dyrektywę. Możemy równiez modyfikować naszą prop aby zmienić kolor naszego elementu dynamicznie
  @HostBinding('style.color') fontColor = 'grey';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}
