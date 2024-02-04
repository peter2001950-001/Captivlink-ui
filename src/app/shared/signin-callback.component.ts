import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-signin-callback',
  template: `<p>Processing signin callback</p>`,
  standalone: true,
  imports: [],
})
export class SigninCallbackComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly tokenService = inject(TokenService);

  ngOnInit() {
    this.authService.userManager.signinCallback().finally(() => {
      this.router.navigate(['']);
      this.authService.userManager.getUser().then((user)=>{
        this.tokenService.setAccessToken(user?.access_token||null);
      })
    });
  }
}
