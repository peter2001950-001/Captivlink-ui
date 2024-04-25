import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignsCreateComponent } from './campaigns-create/campaigns-create.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsListComponent
  },
  {
    path: 'new',
    component: CampaignsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
