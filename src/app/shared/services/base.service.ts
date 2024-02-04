import { HttpHeaders, HttpRequest, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { AppConfigService } from 'src/app/services/app-config.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  private readonly authService = inject(AuthService);
  private readonly appConfig = inject(AppConfigService);
  constructor(private httpClient: HttpClient) {

  }

  handle<T>(method: string, url: string, params?: HttpParams, body?: any){
    return (this.authService.getUser().then((user)=>{
      return firstValueFrom(this.httpClient.request<T>(method, this.appConfig.config.backend.baseUrl + url, {
        body: body,
        params: params,
        headers: new HttpHeaders({"Authorization": ["Bearer " + user?.access_token]})
      }))
    }))
  }
}
