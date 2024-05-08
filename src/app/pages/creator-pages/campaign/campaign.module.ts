import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignFeedModule } from './campaign-feed/campaign-feed.module';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignPartnershipListModule } from './campaign-partnership-list/campaign-partnership-list.module';
import { CampaignDetailsPageModule } from './campaign-details-page/campaign-details-page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    CampaignFeedModule,
    CampaignPartnershipListModule,
    CampaignDetailsPageModule
  ]
})
export class CampaignModule { }
