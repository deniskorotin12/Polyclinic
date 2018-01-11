import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { CardComponent } from 'app/system/card/card.component';
import { DoctorsComponent } from 'app/system/doctors/doctors.component';
import { ContactsComponent } from 'app/system/contacts/contacts.component';


const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
    {path: 'card', component: CardComponent},
    {path: 'doctors', component: DoctorsComponent},
    {path: 'contacts', component: ContactsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
