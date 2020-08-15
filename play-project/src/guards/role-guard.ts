import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    constructor(public router: Router) {}

    canActivate(route: ActivatedRouteSnapshot) {
        const expectedRole = route.data.expectedRole;
        const token = 'myToken' // got from local storage
        const role = this.decode(token);

        if(!this.isAuthenticated || expectedRole !== role) {
            this.router.navigate(['login']);
            return false;
        }
        return true;

    }
    decode(token: string) {
        console.log('deconde token ', token);
        return 'admin';
    }

    isAuthenticated(res) {
        console.log('is auth', res);
        return res;
    }

}