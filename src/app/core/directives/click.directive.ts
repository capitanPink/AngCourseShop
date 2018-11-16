import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  @Input('appClick') param: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.render.setStyle(this.el.nativeElement, 'color', 'pink');
    this.render.setStyle(this.el.nativeElement, 'fontSize', '30px');
    this.render.setStyle(this.el.nativeElement, 'border', '1px solid red');
  }
}
