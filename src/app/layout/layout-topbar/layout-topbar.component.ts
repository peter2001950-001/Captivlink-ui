import { JwtClaims } from 'oidc-client-ts';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../service/layout.service';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-layout-topbar',
  templateUrl: './layout-topbar.component.html',
  styleUrls: ['./layout-topbar.component.scss']
})
export class LayoutTopbarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;


  constructor(public layoutService: LayoutService, private authService: AuthService, public profileService: ProfileService) { }



  logout(){
    this.authService.logout();
  }
}
