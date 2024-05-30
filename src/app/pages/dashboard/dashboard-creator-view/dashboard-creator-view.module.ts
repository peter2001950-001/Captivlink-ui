import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCreatorViewComponent } from './dashboard-creator-view.component';



@NgModule({
  declarations: [
    DashboardCreatorViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashboardCreatorViewComponent]
})
export class DashboardCreatorViewModule { }
