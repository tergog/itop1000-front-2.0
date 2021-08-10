import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CApi } from '../../constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class WaitingGuard implements CanActivate {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.http.get(CApi.server + CApi.auth.status)
        .pipe()
        .subscribe((response: any) => {
          if (response.status) {
            resolve(this.router.createUrlTree(['/personal-room']));
          }
          resolve(true);
        });
    });
  }

}
