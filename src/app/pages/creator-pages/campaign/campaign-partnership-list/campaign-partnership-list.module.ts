import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignPartnershipListComponent } from './campaign-partnership-list.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';
import { ConfirmationService } from 'primeng/api';
import { NoContentModule } from 'src/app/shared/components/no-content/no-content.module';
import { CurrencyFormatterService } from 'src/app/shared/services/currency-formatter.service';



@NgModule({
  declarations: [
    CampaignPartnershipListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    CheckboxModule,
    ConfirmDialogModule,
    TagModule,
    NoContentModule
  ],
  providers:[ConfirmationService, CurrencyFormatterService]
})
export class CampaignPartnershipListModule { }
