import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-campaigns-form',
  templateUrl: './campaigns-form.component.html',
  styleUrls: ['./campaigns-form.component.scss']
})
export class CampaignsFormComponent implements OnInit{
  @Input() public request: any;
  @Output() public submit = new EventEmitter<any>();
  @Output() public close = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private messageService: MessageService) {}
  form!: FormGroup;

  save() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
        var body = this.form.getRawValue();
        console.log(body);
        this.submit.emit(body);
    }
  }
  ngOnInit(): void {
    const { images, internalName, externalName, description } =
      this.request;

      this.form = this.fb.group({
      images: this.fb.control(images),
      internalName: this.fb.control(internalName, [Validators.required]),
      externalName: this.fb.control(externalName, [Validators.required]),
      description: this.fb.control(description, [Validators.required])
    });
  }

  onFileChange(changes: any[]){
    console.log(changes);
  }
}
