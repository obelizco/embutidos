import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import {Platform} from "ionic-angular";
import { Storage } from '@ionic/storage';

@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrar_tutorial : true
  }

  constructor(private storage: Storage, private Platform:Platform) {
    console.log('Hello AjustesProvider Provider');
  }


cargar_storage(){

    let promesa = new Promise((resolve,reject)=>{
      if (this.Platform.is("cordova")) {
        this.storage.ready()
                         .then(()=>{
                           this.storage.get("ajustes")
                                       .then(ajus=>{

                                         if (ajus) {
                                         this.ajustes =ajus;
                                         }


                                         resolve();
                                       })
                         })
      }else{
        if (localStorage.getItem("ajustes")) {
            this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
        }
        resolve();

      }
        });
        return promesa;



}

guardar_storage(){
  if (this.Platform.is("cordova")) {
    this.storage.ready()
                .then(()=>{
                  this.storage.set("ajustes",this.ajustes);
                })
  }else{
     localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
  }
}
}
