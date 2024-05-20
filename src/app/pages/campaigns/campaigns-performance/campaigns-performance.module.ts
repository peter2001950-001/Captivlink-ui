import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsPerformanceComponent } from './campaigns-performance.component';
import {  CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ContentCreatorDetailsModule } from '../content-creator-details/content-creator-details.module';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    CampaignsPerformanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    ChartModule,
    TableModule,
    AvatarModule,
    ContentCreatorDetailsModule,
    PaginatorModule
  ],
  exports: [CampaignsPerformanceComponent]
})
export class CampaignsPerformanceModule { }
