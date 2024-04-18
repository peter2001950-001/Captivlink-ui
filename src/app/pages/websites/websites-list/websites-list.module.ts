import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsitesListComponent } from './websites-list.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService } from 'primeng/dynamicdialog';
import { WebsitesCreateModule } from '../websites-create/websites-create.module';
import { WebsitesEditModule } from '../websites-edit/websites-edit.module';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    WebsitesListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    CheckboxModule,
    WebsitesCreateModule,
    WebsitesEditModule,
    ConfirmDialogModule
  ],
  providers: [DialogService, ConfirmationService]
})
export class WebsitesLiskModule { }
