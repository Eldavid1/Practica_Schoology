import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  band:boolean=false;

  constructor() { }

  Ocultar()
  {
    console.log(this.band);
    this.band = !this.band;
    return this.band;
  }

  ngOnInit(): void {
  }

}
