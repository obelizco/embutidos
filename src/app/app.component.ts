import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {IntroduccionPage} from "../pages/index.paginas";
import {AjustesProvider} from "../providers/ajustes/ajustes";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private _ajustes:AjustesProvider) {
    platform.ready().then(() => {

      this._ajustes.cargar_storage()
                   .then(()=>{
                     if (this._ajustes.ajustes.mostrar_tutorial) {
                         this.rootPage = IntroduccionPage;
                     }else{
                       this.rootPage = HomePage;
                     }

                     statusBar.styleDefault();
                     splashScreen.hide();
                   })

    });
  }
}
