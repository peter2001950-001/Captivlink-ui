import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  role?: any;

  constructor(private svc: AuthService){}
  ngOnInit(): void {
    this.svc.getRole().then((result)=>{
      this.role = result;
      console.log(result);
    })
  }

}
