import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsitesFormComponent } from './websites-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    WebsitesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule
  ],
  exports:[WebsitesFormComponent]
})
export class WebsitesFormModule { }
