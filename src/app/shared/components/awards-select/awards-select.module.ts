import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardsSelectComponent } from './awards-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';



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
  exports:[AwardsSelectComponent]
})
export class AwardsSelectModule { }
