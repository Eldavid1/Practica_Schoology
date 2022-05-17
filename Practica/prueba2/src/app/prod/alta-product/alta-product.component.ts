import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-alta-product',
  templateUrl: './alta-product.component.html',
  styleUrls: ['./alta-product.component.css']
})
export class AltaProductComponent implements OnInit {

  Datos:any;

  constructor() {
  }

  ngOnInit(): void {
    this.ValidarDatos();
  }

  ValidarDatos()
  {
    this.Datos = new FormGroup({
      email:new FormControl("Ingresa correo",[Validators.email,Validators.required]),
      password:new FormControl("Ingresa Contraseña")
    });
  }

}
