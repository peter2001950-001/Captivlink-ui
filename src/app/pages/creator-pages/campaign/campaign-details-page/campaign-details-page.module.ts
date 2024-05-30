import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDetailsPageComponent } from './campaign-details-page.component';

import { TabViewModule } from 'primeng/tabview';
import { CampaignViewModule } from '../campaign-view/campaign-view.module';
import { CampaignPerformanceViewModule } from '../campaign-performance-view/campaign-performance-view.module';


@NgModule({
  declarations: [
    CampaignDetailsPageComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    CampaignViewModule,
    CampaignPerformanceViewModule
  ]
})
export class CampaignDetailsPageModule { }
