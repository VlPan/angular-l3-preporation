import { ElementRef, ComponentRef } from '@angular/core';
import { element } from 'protractor';
import { delay } from 'rxjs/operators';
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';


export class MyStrDirContext {
    public $implicit = 'my Implicit message';
    public color;
    constructor(public loadTime) {

    }
}

@Directive({
    selector: '[myStrDir]'
})

export class MyCustomStrDirective {
    constructor(private tr: TemplateRef<MyStrDirContext>, private vc: ViewContainerRef, private element: ElementRef) {}

    @Input('myStrDir') args: any;
    
    ngOnInit(): void {
        // this.element.nativeElement.styles.backgroundColor = this.args.color;

        console.log(this.args);
        setTimeout(() => {
            // this.element.nativeElement.style.backgroundColor = this.args.color;
            this.vc.createEmbeddedView(this.tr,
                {
                    loadTime: 'Hello world',
                    $implicit: "123",
                    color: this.args.color
                }
            )
        }, this.args.delay)


        // setTimeout(() => {
        //     this.viewContainerRef.createEmbeddedView(
        //       this.templateRef,
        //       new DelayContext(performance.now())
        //       );
        //   }, this.appDelay);
        
    }
}