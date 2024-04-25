import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsFormComponent } from './campaigns-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageUploaderModule } from 'src/app/shared/components/image-uploader/image-uploader.module';
import { DividerModule } from 'primeng/divider';
import { EditorModule } from 'primeng/editor';



@NgModule({
  declarations: [
    CampaignsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ImageUploaderModule,
    DividerModule,
    EditorModule
  ],
  exports: [CampaignsFormComponent]
})
export class CampaignsFormModule { }
