import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { WebsitesService } from 'src/app/services/websites/websites.service';

@Component({
  selector: 'app-website-select',
  templateUrl: './website-select.component.html',
  styleUrls: ['./website-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WebsiteSelectComponent),
      multi: true
    },
  ]
})
export class WebsiteSelectComponent {
  formGroup: FormGroup;
  websites: any;
  onTouched = () => {};

  constructor(svc: WebsitesService){
    this.formGroup = new FormGroup({
      websiteSelected: new FormControl()
    });

    svc.fetchLatest().then((res)=>{
      this.websites = res.data
    })
  }

  writeValue(obj: any): void {
    this.formGroup.controls["websiteSelected"].patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.formGroup.controls["websiteSelected"].valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if(isDisabled)
      this.formGroup.controls["websiteSelected"].disable();
    else
      this.formGroup.controls["websiteSelected"].enable();
  }


  ngOnInit(): void {

  }
}
