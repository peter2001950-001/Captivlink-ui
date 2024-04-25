import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { Campaign, CampaignStatus, AwardType} from 'src/app/services/campaigns/campaign';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent {
awardType = AwardType;
campaignStatus = CampaignStatus;
website: any;

  constructor(private svc: CampaignService, private router: Router){}

  campaigns : Array<Campaign> = [];
  totalCount: number = 0;
  first: number = 0;
  rowsPerPage : number = 10;
  searchTextSubject: Subject<string> = new Subject<string>();
  archived: boolean = false;
  searchText?: string;

  ngOnInit() {
      this.fetchData();
      this.searchTextSubject.pipe(debounceTime(500)).subscribe(res=>{
        this.searchText = res;
        this.fetchData();
      })
  }

  fetchData(){
    var params = new HttpParams();
    params = params.append("startAt", this.first);
    params = params.append("count", this.rowsPerPage);
    if(this.searchText){
      params = params.append("searchText", this.searchText);
    }

    this.svc.fetchLatest(params).then(res=>{
      this.campaigns = res.data;
      this.totalCount = res.totalCount
    })
  }
  paginate(event:any){
      this.first = event.first;
      this.rowsPerPage = event.rows;
      this.fetchData();
  }
  search(event: any){
    this.searchTextSubject.next(event.target.value);
  }

  open(_item?: any){

    if(!_item){
      this.router.navigate(["campaigns", "new"]);
    }
    // let ref;
    // if(_item){
    //   ref = this.dynamicDialog.open(WebsitesEditComponent, {
    //     header: 'Edit a website',
    //     width: '500px',
    //     data: _item,
    //   });
    // }else{
    //   ref = this.dynamicDialog.open(WebsitesCreateComponent, {
    //     header: 'Create new website',
    //     width: '500px'
    // });
    // }
    // ref?.onClose.subscribe(res=>{
    //   this.fetchData();
    // })
  }

}
