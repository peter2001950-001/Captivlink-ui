import { ContactListModule } from './../pages/contacts/contact-list/contact-list.module';
import { LayoutModule } from './layout.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ActivationGuardService } from '../shared/services/activation.guard.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: '',
      redirectTo: '/contacts',
      pathMatch: 'full'
    },
    {
      path: 'contacts',
      loadChildren: () => import('../pages/contacts/contacts.module').then((m) => m.ContactsModule),
      canActivate: [ActivationGuardService]
    },
    {
      path: 'profile',
      loadChildren: () => import('../pages/profile/profile.module').then((m) => m.ProfileModule)
    },
    {
      path: 'websites',
      loadChildren: () => import('../pages/websites/websites.module').then((m) => m.WebsitesModule)
    },
    {
      path: 'campaigns',
      loadChildren: () => import('../pages/campaigns/campaigns.module').then((m) => m.CampaignsModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

export class LayoutComponents {
  public static components = [
    LayoutComponent
  ];
}

