import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBusinessViewComponent } from './dashboard-business-view.component';



@NgModule({
  declarations: [
    DashboardBusinessViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashboardBusinessViewComponent]
})
export class DashboardBusinessViewModule { }
