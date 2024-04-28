import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSelectComponent } from './categories-select.component';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriesSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TreeSelectModule
  ],
  providers: [CategoriesService],
  exports: [CategoriesSelectComponent]
})
export class CategoriesSelectModule { }
