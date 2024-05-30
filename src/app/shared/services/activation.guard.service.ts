import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { map } from 'rxjs';

@Injectable()
export class ActivationGuardService implements CanActivate {
  constructor(private profile: ProfileService, private router: Router) {}
  canActivate() {
    if(!this.profile.isActivated.value){
      this.router.navigate(['/profile']);
    }

    return this.profile.isActivated.value;
  }
}
