import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalleproducto',
  templateUrl: 'detalleproducto.html',
})
export class DetalleproductoPage {
producto:any={};
Proceso_hamburgesa:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.producto =  this.navParams.get("producto");
      this.Proceso_hamburgesa = this.producto.proceso;

  }




}
