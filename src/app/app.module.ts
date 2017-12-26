import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ContactoPage,DetalleproductoPage,RecetaPage,ConvertidorPage,IntroduccionPage} from "../pages/index.paginas";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactoPage,
    DetalleproductoPage,
    RecetaPage,
    ConvertidorPage,
    IntroduccionPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactoPage,
    DetalleproductoPage,
    RecetaPage,
    ConvertidorPage,
    IntroduccionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
