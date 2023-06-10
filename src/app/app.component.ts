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
    { name: 'Home', url: '/', icon: 'home' }
  ];

  linkOff = [
    { name: 'Home', url: '/', icon: 'home' },
    { name: 'Login', url: '/login', icon: 'login' },
    { name: 'User', url: '/user', icon: 'person' },
    { name: 'Food', url: '/food', icon: 'restaurant' },
  ];

  linkOn = [
    { name: 'Home', url: '/', icon: 'home' },
    { name: 'User', url: '/user', icon: 'person' },
    { name: 'Food', url: '/food', icon: 'restaurant' },
    { name: 'Logout', url: '/logout', icon: 'logout' }
  ];

  @ViewChild('drawer') matDrawer!: MatDrawer;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService.init();
    effect(() => {
      this.updateSidenav();
    });
  }

  private updateSidenav() {
    let login = this.localStorageService.item();
    console.log('effects: ' + login);
    if (login === null) {
      this.links = this.linkOff;
    } else {
      this.links = this.linkOn;
    }
  }

  ngOnInit(): void {
  }

  menuClick() {
    this.matDrawer.toggle();
  }
}
