import { Component, Input } from '@angular/core';
import { AppDefault } from 'src/app/core/constants/app-default';

@Component({
  selector: 'fib-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  appName = 'Testing';

}
