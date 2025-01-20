import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RbaGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean  {
    const requiredRole= route.data['role'];
    const currentRole =localStorage.getItem('role');

    if(requiredRole && requiredRole.includes(currentRole)){
      return true;
    }
    else {
      this.router.navigate(['/home']);
      return false;
    }
  }
  
}
