import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private endPoint = '/assets/countries.json';
  private countries: any;

  constructor(private http: HttpClient) {}

  fetch(): Observable<any> {
    if (this.countries) {
      return of(this.countries);
    }
    return this.http.get(this.endPoint).pipe(
      tap((res) => (this.countries = res)),
      shareReplay(1)
    );
  }
}
