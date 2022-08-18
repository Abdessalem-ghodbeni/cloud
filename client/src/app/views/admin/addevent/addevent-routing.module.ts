import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';

const routes: Routes = [
  {path:'',component:AjouterEventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddeventRoutingModule { }
