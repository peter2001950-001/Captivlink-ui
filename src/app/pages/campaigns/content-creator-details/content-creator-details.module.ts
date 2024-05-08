import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCreatorDetailsComponent } from './content-creator-details.component';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContentCreatorDetailsComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    AvatarModule,
    ButtonModule,
    ChipModule
  ],
  exports: [ContentCreatorDetailsComponent]
})
export class ContentCreatorDetailsModule { }
