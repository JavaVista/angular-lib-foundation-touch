import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRippleClick]'
})
export class RippleClickDirective {
  @Input() appRippleClick = 'ripple-button';

  constructor(
    public element: ElementRef,
    public renderer: Renderer2
  ) { }

  @HostListener('mouseenter') onHover() {
    this.renderer.addClass(this.element.nativeElement, this.appRippleClick)
  }
}
