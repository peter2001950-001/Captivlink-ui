import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksSelectComponent } from './social-links-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    SocialLinksSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    SocialLinksSelectComponent
  ]
})
export class SocialLinksSelectModule { }
