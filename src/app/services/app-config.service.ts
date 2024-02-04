import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, firstValueFrom } from 'rxjs';
import { environment } from "../../environments/environment";

const CONFIG_URL: string = environment.appConfig.url;

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig: any;
  private url: string = CONFIG_URL;

  constructor(private http: HttpClient) {}

  public loadAppConfig() {
    console.log(this.url);
    return firstValueFrom(this.http
      .get<any>(this.url)
      .pipe(
        tap((config: any) => {
          this.appConfig = config;
          console.log(this.appConfig);
        })
      ));
  }
  public get config() {
    return this.appConfig;
  }

}
