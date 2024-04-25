import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-image-popup-viewer',
  templateUrl: './image-popup-viewer.component.html',
  styleUrls: ['./image-popup-viewer.component.scss']
})
export class ImagePopupViewerComponent {

  imageUrl: string
  constructor(public config: DynamicDialogConfig){
    this.imageUrl = this.config.data;
  }
}
