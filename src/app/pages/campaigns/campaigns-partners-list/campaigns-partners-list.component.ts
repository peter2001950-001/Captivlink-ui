import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { throwError } from 'rxjs';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';
import { errorHandling } from 'src/app/services/error-handling';
import { CountryService } from 'src/app/shared/components/country-select/country.service';

@Component({
  selector: 'app-campaigns-partners-list',
  templateUrl: './campaigns-partners-list.component.html',
  styleUrls: ['./campaigns-partners-list.component.scss']
})
export class CampaignsPartnersListComponent implements OnInit {
  constructor(private countryService: CountryService, private svc: CampaignService, private confirmationService: ConfirmationService, private messageService: MessageService) {}

  countries?: any[];
  noContent: boolean = false;

  ngOnInit(): void {
    this.countryService.fetch().subscribe((countries: []) => {
      this.countries = countries;
      this.fetchData();
    });
  }

  @Input() campaignId : any;
  items : Array<any> = [];
  totalCount: number = 0;
  first: number = 0;
  rowsPerPage : number = 10;
  archived: boolean = false;
  searchText?: string;
  sorting?: any;

  fetchData(){
    var params = new HttpParams();
    params = params.append("startAt", this.first);
    params = params.append("count", this.rowsPerPage);

    this.svc.fetchCampaignParters(this.campaignId, params).then(res=>{
      this.items = res.data;
      for (const key in this.items) {
        this.items[key].contentCreator.country =  this.countries?.find((country: any) => country.isoAlpha3 === this.items[key].contentCreator.nationality)
      }
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
  }

  actionClick(item: any, resolution: boolean){
    if(!item)
      return

    if(resolution){
      this.confirmationService.confirm({
        message: 'After approving this partner, they will be able to promote your campaign using an affiliate link and receive funds. You cannot undo this action. Are you sure you want to proceed?',
        header: 'Do you want to approve this content creator?',
        icon: 'pi pi-info-circle',
        acceptLabel: "Yes, approve",
        rejectLabel: "Discard",
        rejectButtonStyleClass: "p-button-outlined",
        accept: () => {
          this.svc.approvePartner(item.id).then((res)=>{
            item.status = "Approved";
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Successfully approved partner',
            });
          }).catch((err)=>{
            errorHandling(err, this.messageService);
            return throwError(err);
          })
        }
    })
    }else{
      this.confirmationService.confirm({
        message: 'After rejecting this partner, they will not be able to apply for this campaign again. You cannot undo this action. Are you sure you want to proceed?',
        header: 'Do you want to reject this content creator?',
        icon: 'pi pi-info-circle',
        acceptLabel: "Yes, reject",
        rejectLabel: "Discard",
        rejectButtonStyleClass: "p-button-outlined",
        accept: () => {
          this.svc.rejectPartner(item.id).then((res)=>{
            item.status = "Rejected";
            this.messageService.add({
              severity: 'danger',
              summary: 'Rejected',
              detail: 'Successfully rejected partner',
            });
          }).catch((err)=>{
            errorHandling(err, this.messageService);
            return throwError(err);
          })
        }
    })
    }
  }

}
