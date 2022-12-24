import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Nasza customowa strukturalna dyrektywa. Jej zadanie będzie odwrotne do tego co robi ngIf

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {
  @Input('appStructural') set unless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
