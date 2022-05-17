import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NominaRoutingModule } from './nomina-routing.module';
import { MenuNomComponent } from './menu-nom/menu-nom.component';
import { AdminstrativosComponent } from './adminstrativos/adminstrativos.component';
import { DocentesComponent } from './docentes/docentes.component';


@NgModule({
  declarations: [
    MenuNomComponent,
    AdminstrativosComponent,
    DocentesComponent
  ],
  imports: [
    CommonModule,
    NominaRoutingModule
  ]
})
export class NominaModule { }
