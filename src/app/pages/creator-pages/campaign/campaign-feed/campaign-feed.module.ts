import { CurrencyFormatterService } from './../../../../shared/services/currency-formatter.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignFeedComponent } from './campaign-feed.component';
import { ScrollerModule } from 'primeng/scroller';
import { TagModule } from 'primeng/tag';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { CompanyAvatarModule } from 'src/app/shared/components/company-avatar/company-avatar.module';
import { CampaignViewModule } from '../campaign-view/campaign-view.module';
import { DialogService } from 'primeng/dynamicdialog';
import { NoContentModule } from 'src/app/shared/components/no-content/no-content.module';

@NgModule({
  declarations: [
    CampaignFeedComponent
  ],
  imports: [
    CommonModule,
    ScrollerModule,
    TagModule,
    InfiniteScrollModule,
    ButtonModule,
    CardModule,
    AvatarModule,
    ChipModule,
    CompanyAvatarModule,
    CampaignViewModule,
    NoContentModule
  ],
  providers: [DialogService, CurrencyFormatterService]
})
export class CampaignFeedModule { }
