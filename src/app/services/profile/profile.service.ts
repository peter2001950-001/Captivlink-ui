import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { UserProfile } from './profile';
import { BehaviorSubject, Observable, Subject, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends BaseService {
  isActivated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public fetch(): Promise<UserProfile> {
    var promise = this.handle<UserProfile>('GET', 'user/profile');
    this.onUserChange(promise);
    return promise;
  }

  public update(body: any): Promise<any> {
    var promise = this.handle<any>('PUT', 'user/profile', undefined, body);
    promise.then(() => {
      this.fetch();
    });
    return promise;
  }

  private onUserChange(userPromise: Promise<UserProfile>) {
    userPromise.then((user) => {
      if (user) {
        if (user.role == 'Business') {
          if (!user.companyDetails) {
            this.isActivated.next(false);
          }
          if (user.companyDetails) this.isActivated.next(true);
        }
        if (user.role == 'ContentCreator') {
          if (!user.personDetails) {
            this.isActivated.next(false);
          }
          if (user.personDetails) this.isActivated.next(true);
        }
      }
    });
  }
}
