import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignFeedComponent } from './campaign-feed/campaign-feed.component';
import { CampaignPartnershipListComponent } from './campaign-partnership-list/campaign-partnership-list.component';
import { CampaignDetailsPageComponent } from './campaign-details-page/campaign-details-page.component';

const routes: Routes = [
  {
    path: 'feed',
    component: CampaignFeedComponent
  },
  {
    path: 'partnerships',
    component: CampaignPartnershipListComponent
  },
  {
    path: 'partnerships/:id',
    component: CampaignDetailsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
