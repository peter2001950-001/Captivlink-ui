import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }
    canActivate() {
      return this.authService.getUser().then(user => {
        if (user) {
          return true;
        } else {
          this.authService.login();
          return false;
        }
      });
    }

}

