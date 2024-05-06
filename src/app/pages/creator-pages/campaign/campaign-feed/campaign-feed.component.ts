import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AwardType } from 'src/app/services/campaigns/campaign';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';
import { CampaignViewComponent } from '../campaign-view/campaign-view.component';

@Component({
  selector: 'app-campaign-feed',
  templateUrl: './campaign-feed.component.html',
  styleUrls: ['./campaign-feed.component.scss']
})
export class CampaignFeedComponent implements OnInit {
  constructor(private svc: CampaignService, private dynamicDialog: DialogService){}
  first: number = 0;
  rowsPerPage: number = 3;
  loading: boolean = false;
  ngOnInit(): void {
    this.loadData();
  }


  loadData(){
    if(this.loading) return;

    this.loading = true;
    var params = new HttpParams();
    params = params.append("startAt", this.first);
    params = params.append("count", this.rowsPerPage);
    params = params.append("sortFields", "-createdOn");

    this.svc.fetchFeed(params).then(res=> {
        this.items.push(...res.data);

        if(res.totalCount < this.first){
          this.disableScroll = true;
        }else{
          this.first += this.rowsPerPage;
        }
        this.loading = false;
     }).finally
     (()=>{
      this.loading = false;
     })
  }

  awardType = AwardType;
  items: any = [];
  disableScroll: boolean = false;



 scroller(){
  this.loadData();
 }


 openDetails(campaign: any){
  this.dynamicDialog.open(CampaignViewComponent, {
    header: campaign.externalName,
    width: '60vw',
    maximizable: true,
    data: campaign
  });
 }
}
