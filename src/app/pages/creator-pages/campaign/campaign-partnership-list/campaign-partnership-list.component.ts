import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AwardType } from 'src/app/services/campaigns/campaign';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';

@Component({
  selector: 'app-campaign-partnership-list',
  templateUrl: './campaign-partnership-list.component.html',
  styleUrls: ['./campaign-partnership-list.component.scss']
})
export class CampaignPartnershipListComponent {

  constructor(public svc: CampaignService,  private router: Router){}

  items : Array<any> = [];
  totalCount: number = 0;
  first: number = 0;
  rowsPerPage : number = 10;
  archived: boolean = false;
  searchText?: string;
  awardType = AwardType;
  sorting?: any;
  noContent: boolean = false;

  ngOnInit() {
      this.fetchData();
  }

  fetchData(){
    var params = new HttpParams();
    params = params.append("startAt", this.first);
    params = params.append("count", this.rowsPerPage);
    if(this.sorting){
      params = params.append("sortFields", this.sorting.order>0?"+":"-" + this.sorting.field);
    }

    this.svc.fetchPartnerships(params).then(res=>{
      this.items = res.data;
      this.totalCount = res.totalCount
      if(this.items.length == 0){
        this.noContent = true;
      }
    })
  }
  paginate(event:any){
      this.first = event.first;
      this.rowsPerPage = event.rows;
      this.fetchData();
  }

  open(_item: any){
    this.router.navigate(["creator","campaigns","partnerships", _item.id])
  }

  customSort(event: any){
    if(event.field != this.sorting?.field || event.order != this.sorting?.order){
      this.sorting = event;
      this.fetchData()
    }
  }
}
