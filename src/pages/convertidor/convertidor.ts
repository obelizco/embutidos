import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController } from 'ionic-angular';
/**
 * Generated class for the ConvertidorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convertidor',
  templateUrl: 'convertidor.html',
})
export class ConvertidorPage {
resultado_conversion:any[]=[];
mostrar_tabla:boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtlr:ViewController,
              private alertCtrl:AlertController,) {
  }

cerrar_modal(){
  this.viewCtlr.dismiss();
}
conv_gramos_kilos(pulpa:number){return pulpa*0.001;}
conv_gramos_libras(pulpa:number){return pulpa*0.0022;}
conv_kilos_gramos(pulpa:number){return pulpa*1000;}
conv_kilos_libras(pulpa:number){return pulpa*2.205;}
conv_libra_gramos(pulpa:number){return pulpa * 453.592;}
conv_libra_kilos(pulpa:number){return pulpa * 0.454;}

convertir(valor:number,unidad_medida:string){
  if (unidad_medida=="gramos" && valor!=null) {
    this.mostrar_tabla = true;
    this.resultado_conversion=[];
    this.resultado_conversion.push({'valor':this.conv_gramos_kilos(valor), 'unidad':'(Kg)'});
    this.resultado_conversion.push({'valor':this.conv_gramos_libras(valor), 'unidad':'(lb)'});
  }
  if (unidad_medida=="gramos" && valor==null){this.mostrar_alerta();}

  if (unidad_medida=="kilos" && valor!=null) {
    this.mostrar_tabla = true;
    this.resultado_conversion=[];
    this.resultado_conversion.push({'valor':this.conv_kilos_gramos(valor), 'unidad':'(gr)'});
    this.resultado_conversion.push({'valor':this.conv_kilos_libras(valor), 'unidad':'(lb)'});
  }

  if (unidad_medida=="kilos" && valor==null){this.mostrar_alerta();}

  if (unidad_medida=="libras" && valor!=null) {
    this.mostrar_tabla = true;
    this.resultado_conversion=[];
    this.resultado_conversion.push({'valor':this.conv_libra_gramos(valor), 'unidad':'(gr)'});
    this.resultado_conversion.push({'valor':this.conv_libra_kilos(valor), 'unidad':'(Kg)'});
  }

  if (unidad_medida=="libras" && valor==null){this.mostrar_alerta();}

  if (unidad_medida==null) {
    let alert = this.alertCtrl.create({
       title: 'Error',
       message: 'Por favor elige una Unidad de Medida!',
       buttons: ['OK']
     });
     alert.present();
   }

  }
mostrar_alerta(){
  let alert = this.alertCtrl.create({
     title: 'Error',
     message: 'Por favor Ingrese el Valor',
     buttons: ['OK']
   });
   alert.present();
}

}
