import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { PRODUCTOS } from '../prueba-productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = PRODUCTOS;
  productoSeleccionado : Producto;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onSelect(producto: Producto): void {
    console.log("Producto");
    console.log(producto);
    this.productoSeleccionado = producto;
  }

}
