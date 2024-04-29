import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { JwtClaims, User, UserManager } from 'oidc-client-ts';
import { AppConfigService } from 'src/app/services/app-config.service';
import { Router } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { catchError, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userManager: UserManager;
  role?: string;
  constructor(
    private appConfigService: AppConfigService,
    router: Router,
    tokenService: TokenService
  ) {
    const settings = {
      authority: appConfigService.config?.backend.authorityUrl,
      client_id: 'captivlink-ui',
      redirect_uri:
        appConfigService.config?.frontend.baseUrl + 'signin-callback',
      silent_redirect_uri:
        appConfigService.config?.frontend.baseUrl + 'silent-renew.html',
      post_logout_redirect_uri: appConfigService.config?.frontend.baseUrl,
      response_type: 'code',
      scope: 'openid profile captivlink-backend',
    };

    this.userManager = new UserManager(settings);
    this.userManager.events.addAccessTokenExpired(() => {
      router.navigate(['unauthorized']);
      tokenService.setAccessToken(null);
    });
  }

  getRole(): Promise<string | undefined> {
    return this.userManager.getUser().then((user) => {
      if (user) {
        return jwtDecode<Claims>(user.access_token).role;
      }
      return undefined;
    });
  }

  isAuthenticated(): Promise<boolean> {
    return this.getUser().then((user) => {
      console.log(user);
      if (user) {
        return true;
      } else {
        return false;
      }
    });
  }

  getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  renewToken(): Promise<User | null> {
    return this.userManager.signinSilent();
  }

  logout(): Promise<void> {
    this.userManager.removeUser();
    return this.userManager.signoutRedirect();
  }

  backendUrl() {
    return this.appConfigService.config.backend.baseUrl;
  }
}

export interface Claims extends JwtPayload {
  role: string;
  given_name: string;
  first_name: string;
  email: string;
}
