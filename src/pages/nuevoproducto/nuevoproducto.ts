import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nuevoproducto',
  templateUrl: 'nuevoproducto.html',
})
export class NuevoproductoPage {

listaingredientes:ingredientes[]=[];
ingrediente:any={};
almenos1:boolean=false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtlr:AlertController,
              private toastCtlr:ToastController) {
  }



  crearIngrediente(){
  let alert = this.alertCtlr.create({
    title: 'Nuevo Ingrediente',
    inputs: [
      {
        name: 'Nombre',
        placeholder: 'Nombre...'
      },
      {
        name: 'Cantidad',
        placeholder: 'cant en gramos'
      }
    ],
    buttons: [
      {
        text: 'Cerrar',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Agregar',
        handler: data => {
          let toast = this.toastCtlr.create({
          message: 'Creado con Exito',
          duration: 2000,
          position: "top",
          });
          toast.present();
          this.ingrediente = data;
          this.listaingredientes.push(this.ingrediente);
          console.log(this.listaingredientes);
        }
      }
    ]
  });
  alert.present();

}

activarboton_Crearreceta(){
  if (this.listaingredientes==null) {
      this.almenos1=false;
  }else{
    this.almenos1=true;
  }
  return this.almenos1
}
}

interface ingredientes{
  Nombre:string,
  Cantidad:number
}
