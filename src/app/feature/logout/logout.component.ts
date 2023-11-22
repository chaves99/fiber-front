import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuListEnum, getUrlByType, menuList } from '@core/models/menu-list.model';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'fib-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storageService.clearUser();
    let url = getUrlByType(MenuListEnum.LOGIN);
    if (url !== undefined)
      this.router.navigateByUrl(`feature/${url}`);
  }

}
