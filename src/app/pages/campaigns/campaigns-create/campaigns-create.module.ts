import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsCreateComponent } from './campaigns-create.component';
import { CampaignsFormModule } from '../campaigns-form/campaigns-form.module';



@NgModule({
  declarations: [
    CampaignsCreateComponent
  ],
  imports: [
    CommonModule,
    CampaignsFormModule
  ]
})
export class CampaignsCreateModule { }
