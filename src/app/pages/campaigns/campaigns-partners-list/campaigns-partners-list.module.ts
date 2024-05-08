import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsPartnersListComponent } from './campaigns-partners-list.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { ContentCreatorDetailsModule } from '../content-creator-details/content-creator-details.module';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';



@NgModule({
  declarations: [
    CampaignsPartnersListComponent
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
    ContentCreatorDetailsModule
  ],
  providers:[CampaignService, ConfirmDialog],
  exports: [CampaignsPartnersListComponent]
})
export class CampaignsPartnersListModule { }
