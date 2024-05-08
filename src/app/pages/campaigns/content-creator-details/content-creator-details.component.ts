import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-creator-details',
  templateUrl: './content-creator-details.component.html',
  styleUrls: ['./content-creator-details.component.scss']
})
export class ContentCreatorDetailsComponent {
  @Input() contentCreator?: any
  visible: boolean = false;
  showDialog(){
    this.visible = true;
  }
}
