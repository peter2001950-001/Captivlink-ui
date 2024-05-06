import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignFeedModule } from './campaign-feed/campaign-feed.module';
import { CampaignRoutingModule } from './campaign-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    CampaignFeedModule
  ]
})
export class CampaignModule { }
