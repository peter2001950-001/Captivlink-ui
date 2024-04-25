import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsEditComponent } from './campaigns-edit.component';
import { CampaignsFormModule } from '../campaigns-form/campaigns-form.module';



@NgModule({
  declarations: [
    CampaignsEditComponent
  ],
  imports: [
    CommonModule,
    CampaignsFormModule
  ]
})
export class CampaignsEditModule { }
