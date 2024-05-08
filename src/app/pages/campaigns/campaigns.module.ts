import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsListModule } from './campaigns-list/campaigns-list.module';
import { CampaignsCreateModule } from './campaigns-create/campaigns-create.module';
import { CampaignsEditModule } from './campaigns-edit/campaigns-edit.module';
import { CampaignsFormModule } from './campaigns-form/campaigns-form.module';
import { CampaignsPartnersListModule } from './campaigns-partners-list/campaigns-partners-list.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CampaignsRoutingModule,
    CampaignsListModule,
    CampaignsCreateModule,
    CampaignsEditModule,
    CampaignsFormModule,
    CampaignsPartnersListModule
  ]
})
export class CampaignsModule { }
