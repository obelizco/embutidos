import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvertidorPage } from './convertidor';

@NgModule({
  declarations: [
    ConvertidorPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvertidorPage),
  ],
})
export class ConvertidorPageModule {}
