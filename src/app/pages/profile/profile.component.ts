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
  ngOnInit(): void {
    console.log("log")
    this.form = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
    });

    this.svc.fetch().then((profile)=>{
      this.form.patchValue(profile);
    })
  }

  onSubmit(){

  }
}
