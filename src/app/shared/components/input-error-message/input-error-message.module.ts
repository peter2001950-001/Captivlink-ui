import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorMessageComponent } from './input-error-message.component';



@NgModule({
  declarations: [
    InputErrorMessageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [InputErrorMessageComponent]
})
export class InputErrorMessageModule { }
