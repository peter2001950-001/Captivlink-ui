import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDetailsPageComponent } from './campaign-details-page.component';

import { TabViewModule } from 'primeng/tabview';
import { CampaignViewModule } from '../campaign-view/campaign-view.module';


@NgModule({
  declarations: [
    CampaignDetailsPageComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    CampaignViewModule
  ]
})
export class CampaignDetailsPageModule { }
