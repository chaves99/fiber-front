import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { menuList } from '@core/models/menu-list.model';
import { SidenavService } from '@core/services/sidenav.service';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'fib-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer', { static: true }) matDrawer!: MatDrawer;

  menuList = menuList
    .filter(ml => ml.visibleMode === 'LOGOUT');

  constructor(
    private sidenavService: SidenavService,
    private storageService: StorageService

  ) { }

  ngOnInit(): void {
    this.sidenavService.getSubject().subscribe((v) => {
      if (v) this.matDrawer.toggle();
    });
    this.storageService.getSubject()
      .subscribe(mode => this.menuList = menuList.filter(ml => ml.visibleMode === mode));
  }

  close(): void {
    this.matDrawer.close();
  }

}
