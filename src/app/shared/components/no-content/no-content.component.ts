import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent {
  @Input() primaryText?: string;
  @Input() secondaryText?: string;
}
