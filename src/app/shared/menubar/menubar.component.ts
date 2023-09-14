import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppDefault } from 'src/app/core/constants/app-default';

@Component({
  selector: 'fib-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  appName: string = AppDefault.APP_NAME;

  @Output() menuClickedEvent = new EventEmitter<any>();

  menuButtonClicked(): void {
    // this.menuClickedEvent.emit();
    /**
     * It needs to create a kind of event 
     * that isn't relationated with parent and child,
     * because menubar isn't child nor paretn of sidenav
     * maybe signal
     */
  }

}
