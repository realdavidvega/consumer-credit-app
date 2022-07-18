import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import {Observable} from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

  logged = false;

  constructor(private router: Router, private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, sate: RouterStateSnapshot): Observable<boolean> | boolean {

    this.logged = this.auth.getRegistrado()

    if(this.logged){
      return this.logged;
    } else {
      this.router.navigate(['/order']);
    }

    return this.auth.getRegistrado();
  }
}
