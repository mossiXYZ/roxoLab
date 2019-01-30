import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[highlighter]'
})
export class HighlightDirective implements OnInit {


    constructor(private elementRef : ElementRef){

    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'purple';
        this.elementRef.nativeElement.style.color = 'white';


    }
} 