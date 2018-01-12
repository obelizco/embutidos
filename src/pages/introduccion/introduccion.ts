import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {HomePage} from "../index.paginas";
import {AjustesProvider} from "../../providers/ajustes/ajustes";

@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class IntroduccionPage {

  slides:any[] = [
    {
      title: "Bienvenido!!!",
      description: "<b>Embutidos del Mar App</b>!",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "¿Qué es esta APP?",
      description: "<b>Embutidos del Mar App</b> es una aplicacion que da a conocer los diferentes productos del mar y sus respectivos procesos.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "¿Que hace esta app?",
      description: "Esta aplicación nos facilita la preparacion de los embutidos, por medio de calculos en base a sus respectivas recetas.!",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
  constructor(public navCtrl: NavController, private _ajustes:AjustesProvider) {
  }

saltar_tutorial(){
 this._ajustes.ajustes.mostrar_tutorial=false;
 this._ajustes.guardar_storage();
  this.navCtrl.setRoot(HomePage);
}

}
