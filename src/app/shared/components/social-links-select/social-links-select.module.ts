import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksSelectComponent } from './social-links-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SocialLinksSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SocialLinksSelectModule { }
