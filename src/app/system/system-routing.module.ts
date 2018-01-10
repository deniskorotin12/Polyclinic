import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { CardComponent } from 'app/system/card/card.component';


const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
    {path: 'card', component: CardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
