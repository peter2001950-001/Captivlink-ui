import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyFormatterService {

  constructor() { }

  format(value: number) : string{
    return "BGN " + value.toFixed(2);
  }

  getCurrencySymbol(): string{
    return "BGN ";
  }

  getCurrencyName(): string{
    return "BGN";
  }
}
