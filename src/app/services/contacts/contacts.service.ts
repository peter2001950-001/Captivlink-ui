import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService extends BaseService {


  public readonly endpoint = 'WeatherForecast';

  constructor(public http: HttpClient) {
    super(http);
  }

  public create(request: any): Observable<any> {
    return this.http.post<any>(this.endpoint, request);
  }

  public recover(id: string): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/reactivate`, {id: id});
  }

  public update(id: string, request: any): Observable<any> {
    return this.http.put<any>(`${this.endpoint}`, {id: id, ...request});
  }

  public delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${id}`);
  }

  public fetchLatest(params?: HttpParams): Promise<any> {
    return this.handle<any>("GET", this.endpoint, params);
  }
}
