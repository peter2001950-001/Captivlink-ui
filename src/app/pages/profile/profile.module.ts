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
import { SocialLinksSelectModule } from 'src/app/shared/components/social-links-select/social-links-select.module';
import { CountrySelectModule } from 'src/app/shared/components/country-select/country-select.module';
import { MessagesModule } from 'primeng/messages';
import { CategoriesSelectModule } from 'src/app/shared/components/categories-select/categories-select.module';
import { InputErrorMessageModule } from 'src/app/shared/components/input-error-message/input-error-message.module';
import { ImageUploaderModule } from 'src/app/shared/components/image-uploader/image-uploader.module';


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
    InputTextareaModule,
    SocialLinksSelectModule,
    CountrySelectModule,
    MessagesModule,
    CategoriesSelectModule,
    InputErrorMessageModule,
    ImageUploaderModule
  ]
})
export class ProfileModule { }
