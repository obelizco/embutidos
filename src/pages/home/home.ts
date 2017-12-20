import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PRODUCTOS} from "../../data/productos.data";
import {DetalleproductoPage} from "../index.paginas";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
productos:any[]=PRODUCTOS;
  constructor(public navCtrl: NavController) {

  }

  mostrarDetalle(producto:any){
  this.navCtrl.push(DetalleproductoPage,{ producto });


}

}
