import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploaderComponent } from './image-uploader.component';
import { DialogService } from 'primeng/dynamicdialog';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ImageUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ImageUploaderComponent],
  providers:[DialogService]
})
export class ImageUploaderModule { }
