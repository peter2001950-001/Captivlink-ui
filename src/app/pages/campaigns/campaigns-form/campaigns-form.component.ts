import { map } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-campaigns-form',
  templateUrl: './campaigns-form.component.html',
  styleUrls: ['./campaigns-form.component.scss'],
})
export class CampaignsFormComponent implements OnInit {
  @Input() public request: any;
  @Input() public headerText: any;
  @Output() public submit = new EventEmitter<any>();
  @Output() public close = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  form!: FormGroup;
  minDate: Date = new Date();
  minBudget: number = 0.01;
  isEditMode: boolean = false;

  save(isDraft: boolean) {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      var body = this.form.getRawValue();
      body.categories = body.categories.map((x: any) => {
        return x.key;
      });

      body.websiteId = body.website.id;
      body.website = undefined;

      if (isDraft) {
        body.status = 'Draft';
        this.submit.emit(body);
      } else {
        if (body.status == 'Live') {
          this.submit.emit(body);
          return;
        } else {
          this.confirmationService.confirm({
            message:
              'After publishing your campaign you will be unable to make adjustments to your budget and rewards, also it will become publicly visible.',
            header: 'Do you want to publish your campaign?',
            icon: 'pi pi-info-circle',
            acceptLabel: 'Yes, publish',
            rejectButtonStyleClass: 'p-button-outlined p-button-secondary',
            accept: () => {
              body.status = 'Live';
              this.submit.emit(body);
            },
          });
        }
      }
    }
  }
  ngOnInit(): void {
    const {
      images,
      internalName,
      externalName,
      description,
      categories,
      website,
      link,
      budgetPerCreator,
      endDateTime,
      awards,
      status,
    } = this.request;

    if (this.request && this.request.status == 'Live') {
      this.isEditMode = true;
    }
    if (budgetPerCreator && this.isEditMode) {
      this.minBudget = budgetPerCreator;
    }

    this.form = this.fb.group({
      images: this.fb.control(images),
      internalName: this.fb.control(internalName, [Validators.required]),
      externalName: this.fb.control(externalName, [Validators.required]),
      description: this.fb.control(description, [Validators.required]),
      categories: this.fb.control(categories, [Validators.required]),
      website: this.fb.control(
        website ? { id: website.id, name: website.name } : undefined,
        [Validators.required]
      ),
      link: this.fb.control(link, [Validators.required]),
      budgetPerCreator: this.fb.control(budgetPerCreator, [
        Validators.required,
      ]),
      endDateTime: this.fb.control(
        { value: endDateTime, disabled: this.isEditMode },
        [Validators.required]
      ),
      awards: this.fb.control({ value: awards, disabled: this.isEditMode }, [
        Validators.required,
      ]),
      status: this.fb.control(status),
    });
  }

  onFileChange(changes: any[]) {
    console.log(changes);
  }
}
