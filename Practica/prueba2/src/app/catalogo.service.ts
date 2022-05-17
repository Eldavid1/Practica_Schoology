import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  listaProduct:any []=[
      {
        id: 1,
    nombre: "Laptop",
    precio: "$10",
    imagen: "./assets/laptop.jpg"
      },
    {
      id: 2,
      nombre: "Samsung Fold 2",
      precio: "$20",
      imagen: "./assets/Celular.jpeg"
    }
  ];

  constructor() { }

  getProductos()
  {
    return this.listaProduct;
  }

  getProductosID(id:number)
  {
    return this.listaProduct[id];
  }

  getImagen(img:any)
  {
    return this.listaProduct[img];
  }
}
