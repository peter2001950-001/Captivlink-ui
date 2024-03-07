import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CountryService } from './country.service';
import { DropdownFilterOptions } from 'primeng/dropdown';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountrySelectComponent),
      multi: true
    }
  ]
})
export class CountrySelectComponent implements OnInit, ControlValueAccessor {
  countries!: [];
  selectedCountry: any | undefined;

  filterValue: string | undefined = '';

  changeCallback: (event: any) => void = () => {};
  touchedCallback: (event: any) => void = () => {};

  constructor(private svc: CountryService) {
  }
  ngOnInit(): void {
    this.svc.fetch().subscribe((countries: []) => {
      this.countries = countries;
    });
  }
  writeValue(obj: string): void {
    if(!this.countries){
      this.svc.fetch().subscribe((countries: []) => {
        this.selectedCountry = this.countries?.find((country: any) => country.isoAlpha3 === obj);
      });
    }
  }
  registerOnChange(fn: any): void {
   this.changeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.touchedCallback = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  onChanged(){
    console.log(this.selectedCountry);
    this.changeCallback(this.selectedCountry.isoAlpha3);
  }

}
