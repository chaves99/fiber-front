import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuListModel } from 'src/app/core/models/menu-list.model';
import { SidenavService } from 'src/app/core/services/sidenav.service';

@Component({
  selector: 'fib-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer', { static: true }) matDrawer!: MatDrawer;

  menuList = MenuListModel.MENU_LIST.filter(m => m.isVisible);

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
    this.sidenavService.getSubject().subscribe((v) => {
      if (v) this.matDrawer.toggle();
    });
  }

}
