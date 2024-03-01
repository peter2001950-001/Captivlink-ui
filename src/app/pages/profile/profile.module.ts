import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ProfileRoutingModule } from './profile-routing.module';
import { DividerModule } from 'primeng/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ProfileRoutingModule,
    DividerModule,
    InputTextareaModule
  ]
})
export class ProfileModule { }
