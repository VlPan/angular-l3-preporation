import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrength implements PipeTransform {
        transform(value: number, exponent?: number) {
            return Math.pow(value, isNaN(exponent) ? 1 : exponent);
        }
};
