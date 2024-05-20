import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsEditComponent } from './campaigns-edit.component';
import { CampaignsFormModule } from '../campaigns-form/campaigns-form.module';
import { TabViewModule } from 'primeng/tabview';
import { CampaignsPartnersListModule } from '../campaigns-partners-list/campaigns-partners-list.module';
import { CampaignsPerformanceModule } from '../campaigns-performance/campaigns-performance.module';



@NgModule({
  declarations: [
    CampaignsEditComponent
  ],
  imports: [
    CommonModule,
    CampaignsFormModule,
    TabViewModule,
    CampaignsPartnersListModule,
    CampaignsPerformanceModule
  ]
})
export class CampaignsEditModule { }
