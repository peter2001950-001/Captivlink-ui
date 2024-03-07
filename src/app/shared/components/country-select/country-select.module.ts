import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectComponent } from './country-select.component';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CountrySelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,

  ],
  exports: [ CountrySelectComponent ]
})
export class CountrySelectModule { }
