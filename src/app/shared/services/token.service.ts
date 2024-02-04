import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private accessToken: string | null = null;
  constructor() { }

  setAccessToken(accessToken: string | null){
    this.accessToken = accessToken;
  }

  getAccessToken() : string | null{
    return this.accessToken;
  }
}
