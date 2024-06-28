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
import { CategoriesSelectModule } from 'src/app/shared/components/categories-select/categories-select.module';
import { WebsiteSelectModule } from 'src/app/shared/components/website-select/website-select.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { AwardsSelectModule } from 'src/app/shared/components/awards-select/awards-select.module';
import { InputErrorMessageModule } from 'src/app/shared/components/input-error-message/input-error-message.module';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CurrencyFormatterService } from 'src/app/shared/services/currency-formatter.service';



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
    EditorModule,
    CategoriesSelectModule,
    WebsiteSelectModule,
    InputNumberModule,
    CalendarModule,
    AwardsSelectModule,
    InputErrorMessageModule,
    ConfirmDialogModule
  ],
  providers:[ConfirmationService, CurrencyFormatterService],
  exports: [CampaignsFormComponent]
})
export class CampaignsFormModule { }
