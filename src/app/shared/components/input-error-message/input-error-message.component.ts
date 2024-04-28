import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-error-message',
  templateUrl: './input-error-message.component.html',
  styleUrls: ['./input-error-message.component.scss']
})
export class InputErrorMessageComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.control)
  }

  @Input() control : AbstractControl<any, any> | null = null;
  @Input() name : string = '';
}
