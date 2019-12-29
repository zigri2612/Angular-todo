import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
            private basicAuthenticationService: BasicAuthenticationService,
              private router:Router) { 
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.basicAuthenticationService.isUserLoggedIn() || this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    // route user to login page
    this.router.navigate(['login'])
    return false;
  }

}
