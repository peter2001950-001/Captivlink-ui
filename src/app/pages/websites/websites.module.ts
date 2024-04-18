import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitesRoutingModule } from './websites-routing.module';
import { WebsitesLiskModule } from './websites-list/websites-list.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebsitesRoutingModule,
    WebsitesLiskModule
  ]
})
export class WebsitesModule { }
