import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { UserProfile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService {

  constructor(httpClient: HttpClient ) {
    super(httpClient);
  }

  public fetch(): Promise<UserProfile> {
    return this.handle<UserProfile>("GET", "user/profile");
  }
}
