import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SocialLink, SocialLinkType } from '../../models/social-link';

@Component({
  selector: 'app-social-links-select',
  templateUrl: './social-links-select.component.html',
  styleUrls: ['./social-links-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SocialLinksSelectComponent),
      multi: true
    },
  ]
})
export class SocialLinksSelectComponent implements OnInit, ControlValueAccessor {
  form!: FormGroup;
  socialLinks!: FormArray;
  socialLinksOptions: string[] = Object.keys(SocialLinkType);

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
      value.forEach((link : SocialLink) => this.socialLinks.push(this.fb.group({
        url: this.fb.control(link.url),
        type: this.fb.control(link.type)
      })));
    }
  }

  registerOnChange(fn: any): void {
    this.socialLinks.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onTouched: any = () => {};

  addSocialLink() {
    this.socialLinks.push(this.fb.group({
      url: this.fb.control(''),
      type: this.fb.control('Facebook')
    }));
  }

  removeSocialLink(index: number) {
    this.socialLinks.removeAt(index);
  }
}
