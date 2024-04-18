import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-websites-form',
  templateUrl: './websites-form.component.html',
  styleUrls: ['./websites-form.component.scss']
})
export class WebsitesFormComponent implements OnInit {
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
    const { name, domain, allowSubdomains, accessToken } =
      this.request;

      this.form = this.fb.group({
      name: this.fb.control(name, [Validators.required]),
      domain: this.fb.control(domain, [Validators.required]),
      allowSubdomains: this.fb.control(allowSubdomains??true),
      accessToken: this.fb.control(accessToken)
    });
  }

  copyAccessToken(){
    navigator.clipboard.writeText(this.request.accessToken);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Copied to clipboard'
    });
  }
}
