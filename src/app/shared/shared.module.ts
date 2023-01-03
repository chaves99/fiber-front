import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * The SharedModule should not be providing any services.
 * Just declare components, pipes, directives
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[]
})
export class SharedModule { }
