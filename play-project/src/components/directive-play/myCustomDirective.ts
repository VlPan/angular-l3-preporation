import { ElementRef } from '@angular/core';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[myD]',
})
export class MyCustomDirective {

    @Input('myD') input

    ngOnInit(): void {
        console.log('this.input', this.input);
        this.elementRef.nativeElement.style.border = `3px solid ${this.input}`
        
    }

    constructor(private elementRef: ElementRef) {

    }

}
    
