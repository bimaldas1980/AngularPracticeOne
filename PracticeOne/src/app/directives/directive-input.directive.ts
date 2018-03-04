import { Directive, ElementRef, Input, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiveInput]'
})
export class DirectiveInputDirective implements OnInit {

  @Input() backColor: string = "white";
  @Input("appDirectiveInput") foreColor: string = "black";
  @HostBinding("style.backgroundColor") backColorValue;
  @HostBinding("style.color") colorValue ;

  constructor(elementRef: ElementRef) { 

  }

  @HostListener("mouseover") onmouseover(event:Event) {
    this.backColorValue = this.backColor;
    this.colorValue = this.foreColor;
  }

  @HostListener("mouseleave") onmouseleave(event:Event) {
    this.backColorValue = "white";
    this.colorValue = "black";
  }

  ngOnInit() {
    this.backColorValue = "white";
    this.colorValue = "black";
  }

}
