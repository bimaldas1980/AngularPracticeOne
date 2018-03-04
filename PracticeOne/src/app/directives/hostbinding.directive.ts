import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {
  @HostBinding('style.backgroundColor') backColor = "blue";
  constructor(elementRef: ElementRef) { }

  @HostListener('mouseover') onmouseover(event:Event){
    this.backColor = "green";
  }

  @HostListener('mouseleave') onmouseleave(event:Event){
    this.backColor = "blue";
  }


}
