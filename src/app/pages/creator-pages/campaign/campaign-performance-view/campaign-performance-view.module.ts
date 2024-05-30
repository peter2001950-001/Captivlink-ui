import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignPerformanceViewComponent } from './campaign-performance-view.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    CampaignPerformanceViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    ChartModule,
    TableModule,
    PaginatorModule
  ],
  exports: [CampaignPerformanceViewComponent]
})
export class CampaignPerformanceViewModule { }
