import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService extends BaseService {

  public readonly endpoint = 'campaign';

  constructor(public http: HttpClient) {
    super(http);
  }

  public create(request: any): Promise<any> {
    return this.handle<any>("POST", this.endpoint, undefined, request);
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

  public getById(id: string): Promise<Campaign> {
    return this.handle<any>("GET", `${this.endpoint}/${id}`);
  }

  public fetchFeed(params?: HttpParams): Promise<any> {
    return this.handle<any>("GET", `${this.endpoint}-creator`, params);
  }


}
