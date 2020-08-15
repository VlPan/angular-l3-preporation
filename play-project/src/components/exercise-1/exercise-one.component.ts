import { Component, ContentChild } from "@angular/core";

@Component({
    selector: 'app-ex1',
    templateUrl: './exercise-one.template.html',
    styleUrls: []
})
export class Ex1Component {
    @ContentChild('btn', {static: false}) public button: any;

    ngAfterContentInit(): void {
        console.log(this.button)
        // setTimeout(() => , 1000)
    };
    numbers = [1,2,3,4,5]
    constructor(){}
}