import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardBusinessViewModule } from './dashboard-business-view/dashboard-business-view.module';
import { DashboardCreatorViewModule } from './dashboard-creator-view/dashboard-creator-view.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardBusinessViewModule,
    DashboardCreatorViewModule
  ]
})
export class DashboardModule { }
