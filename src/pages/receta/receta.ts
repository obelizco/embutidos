import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PRODUCTOS} from "../../data/productos.data";
import {DetalleproductoPage} from "../index.paginas";
import { AlertController,ModalController } from 'ionic-angular';
import {ConvertidorPage} from "../index.paginas";
/**
 * Generated class for the RecetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receta',
  templateUrl: 'receta.html',
})
export class RecetaPage {
producto:any={};
porcentajes:any[]=[]
resultado_calculo:any[]=[];
UM_seleccionada:string;
mostrar_tabla:boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl:AlertController,
              private modalCtlr: ModalController) {
      this.producto =  this.navParams.get("producto");
  }

calcular(pulpa:number,unidad_medida:string){
  this.porcentajes= this.producto.calculo;

if (unidad_medida=="gramos" && pulpa!=null) {
    this.mostrar_tabla = true;
    this.resultado_calculo=[];
    this.UM_seleccionada="gr";
    this.calculos(pulpa);
}
if (unidad_medida=="gramos" && pulpa==null){this.mostrar_alerta();}

if (unidad_medida=="kilos" && pulpa!=null) {
    this.mostrar_tabla = true;
    this.resultado_calculo=[];
    this.UM_seleccionada="Kg";
    this.calculos(pulpa);
}

if (unidad_medida=="kilos" && pulpa==null){this.mostrar_alerta();}

if (unidad_medida=="libras" && pulpa!=null) {
    this.mostrar_tabla = true;
    this.resultado_calculo=[];
    this.UM_seleccionada="lb";
    this.calculos(pulpa);

}

if (unidad_medida=="libras" && pulpa==null){this.mostrar_alerta();}
if (unidad_medida==null) {
let alert = this.alertCtrl.create({
   title: 'Error',
   message: 'Por favor Ingrese la Unidad de Medida',
   buttons: ['OK']
 });
 alert.present();}

}


mostrar_alerta(){
  let alert = this.alertCtrl.create({
     title: 'Error',
     message: 'Por favor Ingrese la cantidad!',
     buttons: ['OK']
   });
   alert.present();
}


calculos(pulpa:number){
  for (let i = 0; i < this.porcentajes.length; i++) {
      this.resultado_calculo.push({ 'ingrediente':this.porcentajes[i].ingrediente , 'valor':(pulpa*this.porcentajes[i].porcentaje)/100 } );
  }
}

convertir_cantidad(){this.modalCtlr.create(ConvertidorPage).present();}

}
