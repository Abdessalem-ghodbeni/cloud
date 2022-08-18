import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlleventesRoutingModule } from './alleventes-routing.module';
import { AllEventsComponent } from './all-events/all-events.component';


@NgModule({
  declarations: [
    AllEventsComponent
  ],
  imports: [
    CommonModule,
    AlleventesRoutingModule
  ]
})
export class AlleventesModule { }
