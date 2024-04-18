import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsitesEditComponent } from './websites-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebsitesFormModule } from '../websites-form/websites-form.module';



@NgModule({
  declarations: [
    WebsitesEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    WebsitesFormModule
  ]
})
export class WebsitesEditModule { }
