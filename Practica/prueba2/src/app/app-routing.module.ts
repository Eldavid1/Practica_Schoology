import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from "./menu/cursos/cursos.component";
import {GruposComponent} from "./menu/grupos/grupos.component";
import {ErrorComponent} from "./access/error/error.component";
import {LoginComponent} from "./access/login/login.component";
import {CalificacionesComponent} from "./menu/calificaciones/calificaciones.component";
import {RecursosComponent} from "./menu/recursos/recursos.component";
import {MenuNomComponent} from "./nomina/menu-nom/menu-nom.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {GaleriaComponent} from "./prod/galeria/galeria.component";
import {RegisterComponent} from "./access/register/register.component";
import {RestoreComponent} from "./access/restore/restore.component";

const routes: Routes = [
  {path: 'Register', component: RegisterComponent},
  {path: 'Restaurar', component: RestoreComponent},
  {path: 'Cursos', component: CursosComponent},
  {path: 'Grupos', component: GruposComponent},
  {path: 'Calificaciones', component: CalificacionesComponent},
  {path: 'Recursos', component: RecursosComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Galeria', component: GaleriaComponent},
  {path: 'Galeria', loadChildren:()=>import('./prod/prod.module').then(m=>m.ProdModule)},
  {path: 'Nomina', component:MenuNomComponent},
  {path: 'Nomina', loadChildren:()=>import('./nomina/nomina.module').then(mod=>mod.NominaModule)},
  {path: 'Error', component: ErrorComponent},
  {path: '**', redirectTo: 'Error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
