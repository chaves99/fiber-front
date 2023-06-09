import { Component, effect, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LocalStorageService } from '@core/service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'fiber';

  links = [
    { name: 'Home', isActive: false, url: '/', icon: 'home' },
    { name: 'Login', isActive: false, url: '/login', icon: 'login' },
    { name: 'User', isActive: false, url: '/user', icon: 'person' },
    { name: 'Food', isActive: false, url: '/food', icon: 'restaurant' },
  ];

  linkOff = [
    { name: 'Home', isActive: false, url: '/', icon: 'home' },
    { name: 'Login', isActive: false, url: '/login', icon: 'login' },
    { name: 'User', isActive: false, url: '/user', icon: 'person' },
    { name: 'Food', isActive: false, url: '/food', icon: 'restaurant' },
  ];

  linkOn = [
    { name: 'Home', isActive: false, url: '/', icon: 'home' },
    { name: 'User', isActive: false, url: '/user', icon: 'person' },
    { name: 'Food', isActive: false, url: '/food', icon: 'restaurant' },
  ];

  @ViewChild('drawer') matDrawer!: MatDrawer;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    effect(() => {
      let login = this.localStorageService.item();
      if (login === null) {
        this.links = this.linkOff;
      } else {
        this.links = this.linkOn;
      }
    });
  }

  ngOnInit(): void {
    
  }

  menuClick() {
    this.matDrawer.toggle();
  }
}
