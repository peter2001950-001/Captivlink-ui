import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent {

    role: string| undefined
    constructor(public layoutService: LayoutService, public el: ElementRef, public authService: AuthService){

    }
}
