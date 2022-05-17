import { Component, OnInit } from '@angular/core';
import {CatalogoService} from "../../catalogo.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-prod1',
  templateUrl: './prod1.component.html',
  styleUrls: ['./prod1.component.css']
})
export class Prod1Component implements OnInit {

  id:any;
  img:any;


  constructor(private  CatalogoService:CatalogoService, private Parametro:ActivatedRoute) {

    this.id = this.Parametro.snapshot.paramMap.get('id');
    this.img = this.CatalogoService.getImagen('img');
  }

  ngOnInit(): void {
  }

}
