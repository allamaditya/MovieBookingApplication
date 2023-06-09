import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private routObj: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const isLogin = localStorage.getItem('isLogined')

    if (isLogin === 'true') {

      return true

    }

    alert("you cannot access this component without login!");

    this.routObj.navigate(['/login']);

    return false;

  }
}
