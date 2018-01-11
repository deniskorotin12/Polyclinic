import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { CardComponent } from './card/card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ArticleComponent } from './shared/components/article/article.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirective } from './shared/directives/dropdown.derective';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    CardComponent,
    ContactsComponent,
    DoctorsComponent,
    SidebarComponent,
    ArticleComponent,
    HeaderComponent,
    DropdownDirective
  ]
})
export class SystemModule {}
