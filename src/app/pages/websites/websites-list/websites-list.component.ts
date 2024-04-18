import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject, catchError, debounceTime, throwError } from 'rxjs';
import { errorHandling } from 'src/app/services/error-handling';
import { Website } from 'src/app/services/websites/website';
import { WebsitesService } from 'src/app/services/websites/websites.service';
import { WebsitesCreateComponent } from '../websites-create/websites-create.component';
import { WebsitesEditComponent } from '../websites-edit/websites-edit.component';

@Component({
  selector: 'app-websites-list',
  templateUrl: './websites-list.component.html',
  styleUrls: ['./websites-list.component.scss']
})
export class WebsitesListComponent {
  constructor(public svc: WebsitesService, public dynamicDialog: DialogService,  private messageService: MessageService, private confirmationService: ConfirmationService) {

   }

  websites : Array<Website> = [];
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
      this.websites = res.data;
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
    let ref;
    if(_item){
      ref = this.dynamicDialog.open(WebsitesEditComponent, {
        header: 'Edit a website',
        width: '500px',
        data: _item,
      });
    }else{
      ref = this.dynamicDialog.open(WebsitesCreateComponent, {
        header: 'Create new website',
        width: '500px'
    });
    }
    ref?.onClose.subscribe(res=>{
      this.fetchData();
    })
  }
  archive(item:any){
    this.confirmationService.confirm({
      message: 'Do you want to delete this website?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.svc.delete(item.id).then((res)=>{
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'The website is removed successfully.'
          });
          this.fetchData();
        })
      }
  });
  }

  recover(item:any){
    this.svc.recover(item.id).pipe(
      catchError((err: any) => {
      errorHandling(err, this.messageService);
      return throwError(err);
  })).subscribe({
    next: (res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'The contact is recovered successfully.'
      });
      this.fetchData();
    },
    error: (v) => {}
  });
}
}
