import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ActivationGuardService } from 'src/app/shared/services/activation.guard.service';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [ActivationGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
