import { Component } from '@angular/core';
import { AppDefault } from 'src/app/core/constants/app-default';
import { SidenavService } from 'src/app/core/services/sidenav.service';

@Component({
  selector: 'fib-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  appName: string = AppDefault.APP_NAME;

  constructor(
    private sidenavService: SidenavService
  ) { }

  menuButtonClicked(): void {
    this.sidenavService.toggle();
  }

}
