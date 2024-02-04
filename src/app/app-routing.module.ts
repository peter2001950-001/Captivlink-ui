import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { AuthGuardService } from './shared/services/auth.guard.service';
import { SigninCallbackComponent } from './shared/signin-callback.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  { path: 'signin-callback', component: SigninCallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
