import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * the Core Module is commonly place for singleton services and modules
 * that will be used across the app but only need to be imported once.
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
