import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contactApp';
  currentRoute: string | undefined;

  constructor(){
  }

  ngOnInit(): void {

  }
}
