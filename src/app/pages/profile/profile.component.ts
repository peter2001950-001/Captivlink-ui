import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private svc: ProfileService){}

  form!: FormGroup;
  userId!: string;
  role!: string;
  ngOnInit(): void {
    console.log("log")
    this.form = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
    });

    this.svc.fetch().then((profile)=>{
      this.role = profile.role;
      if(this.role == "Business"){
        this.form.registerControl("companyDetails", this.fb.group({
          name: this.fb.control('', Validators.required),
          identificationNumber: this.fb.control('', Validators.required),
          address: this.fb.control('', Validators.required),
          countryOfRegistration: this.fb.control('', Validators.required),
          beneficialOwner: this.fb.control('', Validators.required),
          website: this.fb.control('', Validators.required),
          summary: this.fb.control('', Validators.required),
          description: this.fb.control('', Validators.required),
          socialMediaLinks: this.fb.array([
            this.fb.group({
              url: ['', Validators.required],
              type: ['', Validators.required]
            }),
          ]),
        }))
      }
      this.form.patchValue(profile);
    })
  }

  onSubmit(){

  }
}
