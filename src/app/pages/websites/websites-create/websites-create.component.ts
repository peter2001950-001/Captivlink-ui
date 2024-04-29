import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, throwError } from 'rxjs';
import { errorHandling } from 'src/app/services/error-handling';
import { WebsitesService } from 'src/app/services/websites/websites.service';

@Component({
  selector: 'app-websites-create',
  templateUrl: './websites-create.component.html',
  styleUrls: ['./websites-create.component.scss']
})
export class WebsitesCreateComponent implements OnInit {
  constructor(public config: DynamicDialogConfig , private ref: DynamicDialogRef,  private svc: WebsitesService, private messageService: MessageService){}
  public request: any;

  ngOnInit(): void {
      this.request = {...this.config.data};
  }

  onSubmit(event: any){
  this.svc.create(event).then(res=>{
  this.messageService.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Successfully saved website'
  });
  this.ref.close(res);
}).catch((err: any)=> {
  errorHandling(err, this.messageService);
  return throwError(err);
});
  }
}
