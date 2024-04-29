import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { throwError } from 'rxjs';
import { errorHandling } from 'src/app/services/error-handling';
import { WebsitesService } from 'src/app/services/websites/websites.service';

@Component({
  selector: 'app-websites-edit',
  templateUrl: './websites-edit.component.html',
  styleUrls: ['./websites-edit.component.scss']
})
export class WebsitesEditComponent {
  constructor(public config: DynamicDialogConfig , private ref: DynamicDialogRef,  private svc: WebsitesService, private messageService: MessageService){}
  public request: any;
  public requestId: any;

  ngOnInit(): void {
      this.request = {...this.config.data};
      this.requestId = this.config.data.id;
  }

  onSubmit(event: any){
  this.svc.update(this.requestId, event).then((res: any)=>{
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
