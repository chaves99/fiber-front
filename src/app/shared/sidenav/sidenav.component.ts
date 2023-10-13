import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { menuList } from '@core/models/menu-list.model';
import { SidenavService } from '@core/services/sidenav.service';

@Component({
  selector: 'fib-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer', { static: true }) matDrawer!: MatDrawer;

  menuList = menuList
    .filter(ml => ml.isVisible);

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
    this.sidenavService.getSubject().subscribe((v) => {
      if (v) this.matDrawer.toggle();
    });
  }

}
