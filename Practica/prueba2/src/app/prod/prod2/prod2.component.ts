import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CatalogoService} from "../../catalogo.service";

@Component({
  selector: 'app-prod2',
  templateUrl: './prod2.component.html',
  styleUrls: ['./prod2.component.css']
})
export class Prod2Component implements OnInit {

  id:any;

  constructor(private  CatalogoService:CatalogoService, private Parametro:ActivatedRoute) {

    this.id = this.Parametro.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
