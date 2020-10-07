import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserRoles} from '../enums/user-roles.enum';

@Injectable({
  providedIn: 'root'
})
export class CheckRoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = JSON.parse(localStorage.getItem('user')).role;
    // console.log( role === 'admin' ? 'Hello' : "You don't have access");
    return role === UserRoles.ADMIN; // true -> go , false -> not go
  }
  
}
