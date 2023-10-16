import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';


@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class FeatureModule { }
