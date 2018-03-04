import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostlistener]'
})
export class HostlistenerDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color","red");
  }

  @HostListener('mouseover') onmouseover(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color","yellow");
  }

  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color","red");
  }
}
