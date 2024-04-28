import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteSelectComponent } from './website-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { WebsitesService } from 'src/app/services/websites/websites.service';


@NgModule({
  declarations: [
    WebsiteSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  exports: [WebsiteSelectComponent],
  providers: [WebsitesService]
})
export class WebsiteSelectModule { }
