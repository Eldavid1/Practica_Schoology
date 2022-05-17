import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CatalogoService} from "../../catalogo.service";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  listaProduct:any []=[];

  constructor(private router:Router, private CatalogoService:CatalogoService){
    this.listaProduct = this.CatalogoService.getProductos();
  }

  Detalle(id:number){
    this.router.navigate(['/Galeria/Prod',id]);
  }

  GuardarProd()
  {
    this.router.navigate(['/Galeria/Guardar']);
  }

  MostrarProd2()
  {
    this.router.navigate(['/Galeria/Prod2']);
  }

  ngOnInit(): void {
  }

}
