import { map } from 'rxjs';
import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Category } from 'src/app/services/categories/category';

@Component({
  selector: 'app-categories-select',
  templateUrl: './categories-select.component.html',
  styleUrls: ['./categories-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CategoriesSelectComponent),
      multi: true
    },
  ]
})
export class CategoriesSelectComponent implements OnInit, ControlValueAccessor {

  formGroup: FormGroup;
  categories: any;
  onTouched = () => {};

  constructor(svc: CategoriesService){
    this.formGroup = new FormGroup({
      selectedCategories: new FormControl()
    });

    svc.fetchLatest().then((res)=>{
      this.categories = this.mapCategories(res);
    })
  }

  writeValue(obj: any): void {
    this.formGroup.controls["selectedCategories"].patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.formGroup.controls["selectedCategories"].valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if(isDisabled)
      this.formGroup.controls["selectedCategories"].disable();
    else
      this.formGroup.controls["selectedCategories"].enable();
  }


  ngOnInit(): void {

  }

  mapCategories(categories: Category[]) : any{
    var result: any[] = []
    for (const key in categories) {
      result[key] = {"key": categories[key].id, "label": categories[key].name, "children": this.mapCategories(categories[key].children)}
    }

    return result;
  }

}
