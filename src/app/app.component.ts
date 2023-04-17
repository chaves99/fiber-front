import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fiber';

  links = [
    { name: 'Home', isActive: false, url: '/', icon: 'home' },
    { name: 'Login', isActive: false, url: '/login', icon: 'login' },
    { name: 'User', isActive: false, url: '/user', icon: 'person'  },
    { name: 'Food', isActive: false, url: '/food', icon: 'restaurant'  },
  ];

  @ViewChild('drawer') matDrawer!: MatDrawer;

  menuClick() {
    console.log(this.matDrawer);
    this.matDrawer.toggle();
  }
}
