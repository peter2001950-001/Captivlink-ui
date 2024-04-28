import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { throwError } from 'rxjs';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';
import { errorHandling } from 'src/app/services/error-handling';

@Component({
  selector: 'app-campaigns-edit',
  templateUrl: './campaigns-edit.component.html',
  styleUrls: ['./campaigns-edit.component.scss']
})
export class CampaignsEditComponent implements OnInit {
  constructor(
    private svc: CampaignService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  request?: any;
  id?: string;

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.id = params['id'];
      this.svc.getById(params["id"]).then((res)=>{
        this.request = {
          images: res.images,
          internalName: res.internalName,
          externalName: res.externalName,
          endDateTime: new Date(res.endDateTime),
          description: res.description,
          categories: res.categories.map(x=> {return {key: x.id, label: x.name}}),
          awards: res.awards,
          budgetPerCreator: res.budgetPerCreator,
          link: res.link,
          website: res.website,
          status: res.status
        }

      }).catch((error)=>{
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Campaign is not found'
        });
        this.router.navigate(["campaigns"])
      })
    });
  }

  onSubmit(event: any) {
    if(this.id)
    this.svc
      .update(this.id, event)
      .then((res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Successfully saved campaign',
        });
        this.router.navigate(["campaigns"])
      })
      .catch((err: any) => {
        errorHandling(err, this.messageService);
        return throwError(err);
      });
  }
}
