import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent {

    /**
     *
     */
    constructor(private readonly authService: AuthService) {


    }

    login(){
      this.authService.login();
    }
}
