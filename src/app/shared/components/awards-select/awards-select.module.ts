import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardsSelectComponent } from './awards-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CurrencyFormatterService } from '../../services/currency-formatter.service';



@NgModule({
  declarations: [
    AwardsSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule
  ],
  providers: [CurrencyFormatterService],
  exports:[AwardsSelectComponent]
})
export class AwardsSelectModule { }
