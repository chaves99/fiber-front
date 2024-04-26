import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from '@core/services/sidenav.service';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'fib-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer', { static: true }) matDrawer!: MatDrawer;

  menuList: MenuItems[] = [];

  allMenus: MenuItems[] = [
    { name: 'Login', visibleOn: 'logout', path: 'login', icon: 'lock_open' },
    { name: 'User', visibleOn: 'login', path: 'user', icon: 'person' },
    { name: 'Food', visibleOn: 'login', path: 'food', icon: 'lunch_dining' },
    { name: 'Register Food', visibleOn: 'login', path: 'register-food', icon: 'menu_book' },
    { name: 'Daily Log', visibleOn: 'login', path: 'daily', icon: 'library_books' },
    { name: 'Historic', visibleOn: 'login', path: 'meal-report', icon: 'library_books' },
    { name: 'Add Meal', visibleOn: 'login', path: 'login', icon: 'post_add' },
    { name: 'Logout', visibleOn: 'login', path: 'logout', icon: 'lock_close' },
  ];

  constructor(
    private sidenavService: SidenavService,
    private storageService: StorageService

  ) { }

  ngOnInit(): void {
    this.sidenavService.getSubject().subscribe((v) => {
      if (v) this.matDrawer.toggle();
    });
    this.storageService.getSubject()
      .subscribe(mode => this.menuList = this.allMenus.filter(ml => {
        if (ml.visibleOn === 'both')
          return true;
        if (ml.visibleOn === 'login' && mode === 'LOGIN') 
          return true;
        if (ml.visibleOn === 'logout' && mode === 'LOGOUT')
          return true;
        return false;
      }));
  }

  close(): void {
    this.matDrawer.close();
  }

}

interface MenuItems {
  name: string;
  visibleOn: 'login' | 'logout' | 'both';
  path: string;
  icon: string;
}
