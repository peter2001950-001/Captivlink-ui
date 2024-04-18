import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class WebsitesService extends BaseService {


  public readonly endpoint = 'website';

  constructor(public http: HttpClient) {
    super(http);
  }

  public create(request: any): Promise<any> {
    return this.handle<any>("POST", this.endpoint, undefined, request);
  }

  public recover(id: string): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/reactivate`, {id: id});
  }

  public update(id: string, request: any): Promise<any> {
    return this.handle<any>("PUT", `${this.endpoint}/${id}`, undefined, request);
  }

  public delete(id: string): Promise<any> {
    return this.handle<any>("DELETE", `${this.endpoint}/${id}`, undefined, undefined);
  }

  public fetchLatest(params?: HttpParams): Promise<any> {
    return this.handle<any>("GET", this.endpoint, params);
  }
}
