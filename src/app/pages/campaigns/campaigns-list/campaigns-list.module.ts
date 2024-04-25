import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsListComponent } from './campaigns-list.component';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService } from 'primeng/dynamicdialog';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    CampaignsListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    CheckboxModule,
    TagModule
  ],
  providers: [CampaignService, DialogService]
})
export class CampaignsListModule { }
