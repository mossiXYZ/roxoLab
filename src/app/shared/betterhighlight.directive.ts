import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow')
  }
}
