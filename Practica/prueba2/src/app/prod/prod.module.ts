import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdRoutingModule } from './prod-routing.module';
import { GaleriaComponent } from './galeria/galeria.component';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';
import { AltaProductComponent } from './alta-product/alta-product.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GaleriaComponent,
    Prod1Component,
    Prod2Component,
    AltaProductComponent
  ],
  imports: [
    CommonModule,
    ProdRoutingModule,
    ReactiveFormsModule

  ]
})
export class ProdModule { }
