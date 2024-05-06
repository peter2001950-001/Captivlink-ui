import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AwardType } from 'src/app/services/campaigns/campaign';
import { ImagePopupViewerComponent } from 'src/app/shared/components/image-popup-viewer/image-popup-viewer.component';

@Component({
  selector: 'app-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss']
})
export class CampaignViewComponent implements OnInit {
  campaign: any;
  awardType = AwardType
  constructor(private dynamicDialog: DialogService, public config: DynamicDialogConfig , private ref: DynamicDialogRef){}

  ngOnInit(): void {
    this.campaign = this.config.data;
  }

  imageClick(imageUrl: any){
    this.dynamicDialog.open(ImagePopupViewerComponent, {
          header: 'Image preview',
          width: '60vw',
          data: imageUrl,
        });
  }
}
