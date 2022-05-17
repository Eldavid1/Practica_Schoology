import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from "../menu/cursos/cursos.component";
import {Prod1Component} from "./prod1/prod1.component";
import {Prod2Component} from "./prod2/prod2.component";
import {GaleriaComponent} from "./galeria/galeria.component";
import {AltaProductComponent} from "./alta-product/alta-product.component";

const routes: Routes = [
  {path: '', children:[
      {path: 'Galeria', component: GaleriaComponent},
      {path: 'Prod/:id', component: Prod1Component},
      {path: 'Guardar', component: AltaProductComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdRoutingModule { }
