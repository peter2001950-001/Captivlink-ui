import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';

@Component({
  selector: 'app-campaign-details-page',
  templateUrl: './campaign-details-page.component.html',
  styleUrls: ['./campaign-details-page.component.scss']
})
export class CampaignDetailsPageComponent implements OnInit {

  constructor(private svc: CampaignService, private route: ActivatedRoute){}

  campaign?: any
  id?: string;
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = params['id']
      if(this.id)
      this.svc.getCreatorCampaignById(this.id).then((res)=>{
        this.campaign = res;
      })
    })

  }

}
