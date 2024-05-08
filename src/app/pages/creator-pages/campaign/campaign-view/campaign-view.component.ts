import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { throwError } from 'rxjs';
import { AppConfig } from 'src/app/layout/service/layout.service';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AwardType } from 'src/app/services/campaigns/campaign';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';
import { errorHandling } from 'src/app/services/error-handling';
import { ImagePopupViewerComponent } from 'src/app/shared/components/image-popup-viewer/image-popup-viewer.component';

@Component({
  selector: 'app-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss']
})
export class CampaignViewComponent implements OnInit {
  @Input() campaign: any;
  @Input() mode: string = "modal";

  awardType = AwardType
  constructor(private dynamicDialog: DialogService, public config: DynamicDialogConfig , private ref: DynamicDialogRef, private svc: CampaignService, private messageService: MessageService, private appConfig: AppConfigService){}


  ngOnInit(): void {
    if(this.config?.data){
      this.campaign = this.config.data;
    }

    if(this.campaign?.partnership?.affiliateCode){
      this.campaign.partnership.affiliateLink = this.appConfig.config.publicApi + "/" + this.campaign?.partnership?.affiliateCode
    }
  }

  imageClick(imageUrl: any){
    this.dynamicDialog.open(ImagePopupViewerComponent, {
          header: 'Image preview',
          width: '60vw',
          data: imageUrl,
        });
  }

  actionClick(){
    if(this.campaign?.partnership && this.campaign?.partnership.status == "AwaitingApproval"){
      this.svc.revokeCampaign(this.campaign.id).then((res)=>{
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Successfully cancelled application',
        });
        this.campaign.partnership = null;
      }).catch((err: any) => {
        errorHandling(err, this.messageService);
        return throwError(err);
      });
    }

    if(!this.campaign?.partnership){
      this.svc.applyForCampaign(this.campaign.id).then((res)=>{
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Successfully applied for this campaing',
        });
        this.campaign.partnership = {status: 'AwaitingApproval'};
      }).catch((err: any) => {
        errorHandling(err, this.messageService);
        return throwError(err);
      });
    }
  }

  closeModal(){
    this.ref.close(this.campaign);
  }

  copyLink(){
    navigator.clipboard.writeText(this.campaign.partnership.affiliateLink);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Copied to clipboard'
    });
  }
}
