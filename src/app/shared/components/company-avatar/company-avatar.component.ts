import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-avatar',
  templateUrl: './company-avatar.component.html',
  styleUrls: ['./company-avatar.component.scss']
})
export class CompanyAvatarComponent {

  @Input() company?: any
  visible: boolean = false;
  showDialog(){
    this.visible = true;
  }

}
