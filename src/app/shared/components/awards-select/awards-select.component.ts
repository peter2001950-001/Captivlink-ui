import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Award, AwardType } from 'src/app/services/campaigns/campaign';
import { CurrencyFormatterService } from '../../services/currency-formatter.service';

@Component({
  selector: 'app-awards-select',
  templateUrl: './awards-select.component.html',
  styleUrls: ['./awards-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AwardsSelectComponent),
      multi: true
    },
  ]
})
export class AwardsSelectComponent implements OnInit, ControlValueAccessor {
  form!: FormGroup;
  awards!: FormArray;
  isEditMode: boolean = false
  awardsOptions: any[] = [{
    label: "Click", value: "PerClick",
  },{
    label: "Purchase", value: "PerConversion"
  }, {
    label: "Percentage", value: "Percentage"
  }]
  awardType = AwardType;

  constructor(private fb: FormBuilder, public currencuFormatter: CurrencyFormatterService) { }

  ngOnInit() {
    this.form = this.fb.group({
      awards: this.fb.array([])
    });
    this.awards = this.form.get('awards') as FormArray;
  }

  writeValue(value: any): void {
    if (value) {
      this.awards.clear();
      value.forEach((award : Award) => this.awards.push(this.fb.group({
        type: this.fb.control(award.type),
        amount: this.fb.control(award.amount),
        id: this.fb.control(award.id)
      })));
    }
  }

  registerOnChange(fn: any): void {
    this.awards.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isEditMode = isDisabled;
    if(isDisabled){
      this.awards.disable();
    }else{
      this.awards.enable();
    }

   }


  onTouched: any = () => {};

  addAward() {
    if(this.awards.length<3)
      this.awards.push(this.fb.group({
        type: this.fb.control("PerClick"),
        amount: this.fb.control(null),
      }));
  }

  removeAward(index: number) {
    this.awards.removeAt(index);
  }
}
