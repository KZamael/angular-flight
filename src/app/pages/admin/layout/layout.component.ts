import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  loggedUserData: any;

  private FLIGHT_USER = 'FlightUser';

  constructor(private router: Router) {
    const localData = localStorage.getItem(this.FLIGHT_USER);
    if (localData !== null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logoff() {
    localStorage.removeItem(this.FLIGHT_USER);
    this.router.navigateByUrl('/login');
  }
}
