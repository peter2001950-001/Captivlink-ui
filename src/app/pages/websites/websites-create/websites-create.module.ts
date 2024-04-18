import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsitesCreateComponent } from './websites-create.component';
import { WebsitesFormModule } from '../websites-form/websites-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WebsitesCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    WebsitesFormModule
  ]
})
export class WebsitesCreateModule { }
