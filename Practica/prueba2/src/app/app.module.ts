import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import {AccessModule} from "./access/access.module";
import { CursosComponent } from './menu/cursos/cursos.component';
import { GruposComponent } from './menu/grupos/grupos.component';
import { CalificacionesComponent } from './menu/calificaciones/calificaciones.component';
import { RecursosComponent } from './menu/recursos/recursos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    CursosComponent,
    GruposComponent,
    CalificacionesComponent,
    RecursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
