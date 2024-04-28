import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService {

  public readonly endpoint = 'category';

  constructor(public http: HttpClient) {
    super(http);
  }
  public fetchLatest(params?: HttpParams): Promise<any> {
    return this.handle<any>("GET", this.endpoint, params);
  }
}
