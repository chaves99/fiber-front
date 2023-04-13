import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fiber';

  @ViewChild('drawer') matDrawer!: MatDrawer;

  menuClick() {
    console.log(this.matDrawer);
    this.matDrawer.toggle();
  }
}
