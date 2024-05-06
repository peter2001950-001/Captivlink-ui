import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignFeedComponent } from './campaign-feed/campaign-feed.component';

const routes: Routes = [
  {
    path: 'feed',
    component: CampaignFeedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
