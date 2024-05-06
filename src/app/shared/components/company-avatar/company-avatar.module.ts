import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyAvatarComponent } from './company-avatar.component';
import { ChipModule } from 'primeng/chip';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    CompanyAvatarComponent
  ],
  imports: [
    CommonModule,
    ChipModule,
    AvatarModule,
    ButtonModule,
    DialogModule
  ],

  exports: [CompanyAvatarComponent]
})
export class CompanyAvatarModule { }
