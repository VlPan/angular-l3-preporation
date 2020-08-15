import { Directive, ElementRef, Input, HostBinding, HostListener, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
    selector: '[myClicker]',
    exportAs: 'myClicker'
})
export class MyClickedDirective {
    @Input() set myClicker(val) {
        // whatever you want
    }
    ngOnInit(): void {
        this.vr.createEmbeddedView(this.tr, {
            $implicit: 'defaultValue',
            firstName: 'Sam',
            secondName: 'Smitch'
        });
    }
    constructor(private el: ElementRef, private vr: ViewContainerRef, private tr: TemplateRef<any>) {}
};