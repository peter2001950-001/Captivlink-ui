import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignViewComponent } from './campaign-view.component';
import { GalleriaModule } from 'primeng/galleria';
import { ImagePopupViewerModule } from 'src/app/shared/components/image-popup-viewer/image-popup-viewer.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DividerModule } from 'primeng/divider';
import { CompanyAvatarModule } from 'src/app/shared/components/company-avatar/company-avatar.module';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CurrencyFormatterService } from 'src/app/shared/services/currency-formatter.service';



@NgModule({
  declarations: [
    CampaignViewComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    ImagePopupViewerModule,
    ScrollPanelModule,
    TableModule,
    ChipModule,
    DividerModule,
    CompanyAvatarModule,
    TagModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    InputTextModule
  ],
  providers: [DialogService, DynamicDialogConfig, DynamicDialogRef, CurrencyFormatterService],
  exports:[CampaignViewComponent]
})
export class CampaignViewModule { }
