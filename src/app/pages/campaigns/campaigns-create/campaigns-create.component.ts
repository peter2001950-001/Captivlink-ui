import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { throwError } from 'rxjs';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';
import { errorHandling } from 'src/app/services/error-handling';

@Component({
  selector: 'app-campaigns-create',
  templateUrl: './campaigns-create.component.html',
  styleUrls: ['./campaigns-create.component.scss'],
})
export class CampaignsCreateComponent implements OnInit {
  constructor(
    private svc: CampaignService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.request = {
      images: [],
      internalName: '',
      externalName: '',
      description: '',
      categories: [],
      status: "Draft"
    };
  }

  onSubmit(event: any) {
    this.svc
      .create(event)
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

  request?: any;
}
