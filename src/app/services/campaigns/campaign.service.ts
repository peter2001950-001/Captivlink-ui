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

  public approvePartner(id: string): Promise<any> {
    return this.handle<any>("POST", `${this.endpoint}/partner/${id}/approve`);
  }

  public rejectPartner(id: string): Promise<any> {
    return this.handle<any>("POST", `${this.endpoint}/partner/${id}/reject`);
  }

  public fetchCampaignParters(campaignId: string, params?: HttpParams) : Promise<any>{
    return this.handle<any>("GET", `${this.endpoint}/${campaignId}/partners`, params);
  }
  public fetchFeed(params?: HttpParams): Promise<any> {
    return this.handle<any>("GET", `${this.endpoint}-creator/`, params);
  }

  public applyForCampaign(campaignId: string): Promise<any> {
    return this.handle<any>("POST", `${this.endpoint}-creator/${campaignId}/apply`);
  }

  public revokeCampaign(campaignId: string): Promise<any> {
    return this.handle<any>("POST", `${this.endpoint}-creator/${campaignId}/revoke`);
  }

  public fetchPartnerships(params?: HttpParams): Promise<any> {
    return this.handle<any>("GET", `${this.endpoint}-creator/partnership`, params);
  }

  public getCreatorCampaignById(id: string): Promise<any> {
    return this.handle<any>("GET", `${this.endpoint}-creator/${id}`);
  }

}
