import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsCreateComponent } from './campaigns-create.component';
import { CampaignsFormModule } from '../campaigns-form/campaigns-form.module';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    CampaignsCreateComponent
  ],
  imports: [
    CommonModule,
    CampaignsFormModule,
    CardModule
  ]
})
export class CampaignsCreateModule { }
