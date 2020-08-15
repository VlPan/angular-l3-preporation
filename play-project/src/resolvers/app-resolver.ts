import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable, timer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AppResolver implements Resolve<any> {
    constructor() {}

    resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
        console.log('stare resolving');
        return timer(200);
    }
}