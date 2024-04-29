import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { throwError } from 'rxjs';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private svc: ProfileService,
    private messageService: MessageService
  ) {}

  form!: FormGroup;
  userId!: string;
  role!: string;
  showWarning: boolean = false;
  messages: Message[] = [];

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
    });
    if (
      this.svc.isActivated.subscribe((activated) => {
        if (!activated)
          this.messages.push({
            severity: 'warn',
            summary: 'Warning',
            detail:
              'Please, enter the information below to activate your account',
          });
        else this.messages = [];
      })
    )
      this.svc.fetch().then((profile) => {
        this.role = profile.role;
        if (this.role == 'Business') {
          this.form.registerControl(
            'companyDetails',
            this.fb.group({
              name: this.fb.control('', Validators.required),
              identificationNumber: this.fb.control('', Validators.required),
              address: this.fb.control('', Validators.required),
              countryOfRegistration: this.fb.control('', Validators.required),
              beneficialOwner: this.fb.control('', Validators.required),
              website: this.fb.control('', Validators.required),
              summary: this.fb.control('', Validators.required),
              description: this.fb.control('', Validators.required),
              socialMediaLinks: this.fb.control('', Validators.required),
            })
          );
        }else if (this.role == 'ContentCreator') {
          this.form.registerControl(
            'personDetails',
            this.fb.group({
              nickname: this.fb.control('', Validators.required),
              summary: this.fb.control('', Validators.required),
              description: this.fb.control('', Validators.required),
              socialMediaLinks: this.fb.control(null, Validators.required),
              categories: this.fb.control(null, Validators.required),
              nationality: this.fb.control(null, Validators.required),
              avatar: this.fb.control("", Validators.required),
            })
          );
        }

        this.form.patchValue(profile);
        if(profile.personDetails){
          this.form.get("personDetails.avatar")?.setValue([profile.personDetails.avatar]);
          this.form.get("personDetails.categories")?.setValue(profile.personDetails.categories.map((x:any) => {return {key: x.id, label: x.name}}));

        }
      });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if(this.form.invalid){
      return;
    }

    var body = Utils.getRawValue(this.form);

    if(body.personDetails){
      body.personDetails.categories = body.personDetails.categories.map((x: any)=> {
        return x.key
      })

      body.personDetails.avatar = body.personDetails.avatar[0];
    }



    this.svc.update(body).then((profile) => {
      this.form.patchValue(profile);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Profile updated successfully',
      });
    }).catch((error) => {
      console.log(error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Profile update failed',
      });
      throwError(error);
    });
  }
}
