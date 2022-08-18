import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddeventRoutingModule } from './addevent-routing.module';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AjouterEventComponent
  ],
  imports: [
    CommonModule,
    AddeventRoutingModule
  ]
})
export class AddeventModule { }
