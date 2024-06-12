import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/layout.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-layout-menu',
    templateUrl: './layout-menu.component.html'
})
export class LayoutMenuComponent implements OnInit {

    model: any[] = [];
    role: string| undefined
    constructor(public layoutService: LayoutService, private authService: AuthService) { }

    ngOnInit() {
      this.authService.getRole().then(role=> {
        if(role == "Business"){
          this.model = [
            {
                label: 'Basic',
                items: [
                    { label: 'Websites', icon: 'pi pi-fw pi-home', routerLink: ['/websites'] },
                    { label: 'Campaigns', icon: 'pi pi-fw pi-home', routerLink: ['/campaigns'] }
                ]
            }
        ];
        }else{
          this.model = [
            {
                label: 'Basic',
                items: [
                    { label: 'My feed', icon: 'pi pi-fw pi-home', routerLink: ['/creator/campaigns/feed'] },
                    { label: 'Partnerships', icon: 'pi pi-fw pi-home', routerLink: ['/creator/campaigns/partnerships'] }
                ]
            }
        ];
        }
      });

    }
}
