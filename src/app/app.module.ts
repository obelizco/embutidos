import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage,ContactoPage,DetalleproductoPage,RecetaPage,NuevoproductoPage} from "../pages/index.paginas";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ContactoPage,
    DetalleproductoPage,
    RecetaPage,
    NuevoproductoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ContactoPage,
    DetalleproductoPage,
    RecetaPage,
    NuevoproductoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
