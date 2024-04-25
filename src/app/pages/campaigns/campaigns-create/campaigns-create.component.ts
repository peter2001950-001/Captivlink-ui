import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns-create',
  templateUrl: './campaigns-create.component.html',
  styleUrls: ['./campaigns-create.component.scss']
})
export class CampaignsCreateComponent implements OnInit {
  ngOnInit(): void {

    this.request = {
      images: ["https://ucarecdn.com/8bd24c9f-611a-41ec-b86f-baa384fa2d1e/-/preview/"],
      internalName: "",
      externalName:  "",
      description: ""
    }
  }
  request?: any;

}
