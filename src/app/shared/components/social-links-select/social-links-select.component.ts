import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-social-links-select',
  templateUrl: './social-links-select.component.html',
  styleUrls: ['./social-links-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SocialLinksSelectComponent),
      multi: true
    }
  ]
})
export class SocialLinksSelectComponent implements OnInit, ControlValueAccessor {
  form!: FormGroup;
  socialLinks!: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      socialLinks: this.fb.array([])
    });
    this.socialLinks = this.form.get('socialLinks') as FormArray;
  }

  writeValue(value: any): void {
    if (value) {
      this.socialLinks.clear();
      value.forEach((link : any) => this.socialLinks.push(this.fb.control(link)));
    }
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onTouched: any = () => {};

  addSocialLink() {
    this.socialLinks.push(this.fb.control(''));
  }

  removeSocialLink(index: number) {
    this.socialLinks.removeAt(index);
  }
}
